import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import CodeBlock from "../common/CodeBlock";

// Import shadcn components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

interface CodeExampleProps {
    title: string;
    description?: string;
    code: string;
    language: string;
    demoComponent?: React.ReactNode; // Optional demo component
    showCopyButton?: boolean;
}

const CodeExample: React.FC<CodeExampleProps> = ({ title, description, code, language, demoComponent }) => {
    const { darkMode } = useTheme();

    // If no demo component is provided, just show the code example
    if (!demoComponent) {
        return (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                <Card className={`mb-8 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}>
                    <CardHeader
                        className={`pb-2 ${darkMode ? "border-b border-gray-700" : "border-b border-gray-200"}`}>
                        <CardTitle className={darkMode ? "text-white" : "text-gray-900"}>{title}</CardTitle>
                        {description && (
                            <CardDescription className={darkMode ? "text-gray-400" : "text-gray-500"}>
                                {description}
                            </CardDescription>
                        )}
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="p-1">
                            <CodeBlock code={code} language={language} showLineNumbers={true} />
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        );
    }

    // If a demo component is provided, show both code and demo in tabs
    return (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <Card className={`mb-8 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}>
                <CardHeader className={darkMode ? "border-b border-gray-700" : "border-b border-gray-200"}>
                    <div className="flex justify-between items-center">
                        <div>
                            <CardTitle className={darkMode ? "text-white" : "text-gray-900"}>{title}</CardTitle>
                            {description && (
                                <CardDescription className={darkMode ? "text-gray-400" : "text-gray-500"}>
                                    {description}
                                </CardDescription>
                            )}
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <Tabs defaultValue="demo" className="w-full">
                        <div
                            className={`px-4 py-3 border-b ${
                                darkMode ? "bg-gray-700 border-gray-600" : "bg-gray-100 border-gray-200"
                            }`}>
                            <TabsList className={`grid w-64 grid-cols-2 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
                                <TabsTrigger
                                    value="demo"
                                    className={`text-base font-medium rounded-md px-4 py-2 ${
                                        darkMode
                                            ? "data-[state=active]:bg-indigo-600 data-[state=active]:text-white"
                                            : "data-[state=active]:bg-indigo-100 data-[state=active]:text-indigo-800"
                                    }`}>
                                    Demo
                                </TabsTrigger>
                                <TabsTrigger
                                    value="code"
                                    className={`text-base font-medium rounded-md px-4 py-2 ${
                                        darkMode
                                            ? "data-[state=active]:bg-indigo-600 data-[state=active]:text-white"
                                            : "data-[state=active]:bg-indigo-100 data-[state=active]:text-indigo-800"
                                    }`}>
                                    Code
                                </TabsTrigger>
                            </TabsList>
                        </div>

                        <TabsContent value="demo" className="p-6">
                            {demoComponent}
                        </TabsContent>

                        <TabsContent value="code" className="p-0">
                            <div className={darkMode ? "bg-gray-900" : "bg-white"}>
                                <CodeBlock code={code} language={language} showLineNumbers={true} />
                            </div>
                        </TabsContent>
                    </Tabs>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default CodeExample;
