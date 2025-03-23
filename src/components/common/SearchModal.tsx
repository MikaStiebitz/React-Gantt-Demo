import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { Search } from "lucide-react";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Command, CommandInput, CommandList, CommandGroup, CommandItem, CommandEmpty } from "../ui/command";

// Structure containing searchable components
interface SearchItem {
    id: string;
    title: string;
    path: string;
    category: string;
    description: string;
}

// Component sections data
const searchItems: SearchItem[] = [
    {
        id: "gantt-chart",
        title: "GanttChart Component",
        path: "/components#gantt-chart",
        category: "Components",
        description: "Main component for rendering a Gantt chart",
    },
    {
        id: "task-interfaces",
        title: "Task Interfaces",
        path: "/components#task-interfaces",
        category: "API",
        description: "Interfaces for structuring task data",
    },
    {
        id: "props",
        title: "Core Props",
        path: "/components#props",
        category: "API",
        description: "Core props for the GanttChart component",
    },
    {
        id: "events",
        title: "Event Handlers",
        path: "/components#events",
        category: "API",
        description: "Event handlers for the GanttChart component",
    },
    {
        id: "view-modes",
        title: "View Modes",
        path: "/components#view-modes",
        category: "Features",
        description: "Different timeline view modes (day, week, month, quarter, year)",
    },
    {
        id: "customization",
        title: "Customization",
        path: "/components#customization",
        category: "Features",
        description: "Customize the appearance of the Gantt chart",
    },
    {
        id: "examples",
        title: "Code Examples",
        path: "/components#examples",
        category: "Examples",
        description: "Complete code examples",
    },
    {
        id: "installation",
        title: "Installation",
        path: "/#installation",
        category: "Getting Started",
        description: "Installation instructions",
    },
];

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
    const { darkMode } = useTheme();
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");

    // Focus input when dialog opens
    useEffect(() => {
        if (isOpen) {
            const input = document.querySelector("[cmdk-input]") as HTMLInputElement;
            if (input) {
                setTimeout(() => input.focus(), 100);
            }
        }
    }, [isOpen]);

    // Handle escape key press to close modal
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };
        window.addEventListener("keydown", handleEsc);
        return () => {
            window.removeEventListener("keydown", handleEsc);
        };
    }, [onClose]);

    // Handle item selection
    const handleSelect = (item: SearchItem) => {
        onClose();
        navigate(item.path);

        // Scroll to the section if it's a hash link
        if (item.path.includes("#")) {
            setTimeout(() => {
                const sectionId = item.path.split("#")[1];
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }, 100);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent
                className={`sm:max-w-2xl ${darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"}`}
                onPointerDownOutside={onClose}>
                <DialogHeader>
                    <DialogTitle className={darkMode ? "text-white" : "text-gray-900"}>
                        Search Documentation
                    </DialogTitle>
                </DialogHeader>

                <Command className={darkMode ? "bg-gray-900" : "bg-white"}>
                    <div
                        className={`flex items-center border ${
                            darkMode ? "border-gray-700" : "border-gray-300"
                        } px-3 rounded-md mb-2`}>
                        <Search className={`mr-2 h-4 w-4 shrink-0 ${darkMode ? "text-gray-400" : "text-gray-500"}`} />
                        <CommandInput
                            placeholder="Type to search..."
                            value={searchQuery}
                            onValueChange={setSearchQuery}
                            className={`flex h-11 w-full py-3 text-sm bg-transparent outline-none border-0 ring-0 focus:ring-0 focus:outline-none ${
                                darkMode
                                    ? "text-white placeholder:text-gray-400"
                                    : "text-gray-900 placeholder:text-gray-500"
                            }`}
                        />
                    </div>

                    <CommandList
                        className={`max-h-[300px] overflow-y-auto ${darkMode ? "text-gray-100" : "text-gray-800"}`}>
                        <CommandEmpty
                            className={`py-6 text-center text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                            No results found.
                        </CommandEmpty>

                        {["Getting Started", "Components", "API", "Features", "Examples"].map(category => {
                            const categoryItems = searchItems.filter(
                                item =>
                                    item.category === category &&
                                    (searchQuery === "" ||
                                        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                        item.description.toLowerCase().includes(searchQuery.toLowerCase()))
                            );

                            if (categoryItems.length === 0) return null;

                            return (
                                <CommandGroup
                                    key={category}
                                    heading={category}
                                    className={`pb-2 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                                    {categoryItems.map(item => (
                                        <CommandItem
                                            key={item.id}
                                            value={item.id}
                                            onSelect={() => handleSelect(item)}
                                            className={`flex flex-col items-start p-2 rounded-md cursor-pointer my-1 ${
                                                darkMode
                                                    ? "hover:bg-gray-800 aria-selected:bg-gray-800"
                                                    : "hover:bg-gray-100 aria-selected:bg-gray-100"
                                            }`}>
                                            <div
                                                className={`text-base font-medium ${
                                                    darkMode ? "text-white" : "text-gray-900"
                                                }`}>
                                                {item.title}
                                            </div>
                                            <div className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                                                {item.description}
                                            </div>
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            );
                        })}
                    </CommandList>
                </Command>
            </DialogContent>
        </Dialog>
    );
};

export default SearchModal;
