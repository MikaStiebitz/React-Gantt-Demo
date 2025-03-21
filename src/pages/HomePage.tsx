import { createElement } from "react";
import type { ReactElement } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import GanttDemo from "../components/demo/GanttDemo";
import CodeExample from "../components/demo/CodeExample";

// Update the component type definition to be compatible with React 19
const HomePage = (): ReactElement => {
    const { darkMode } = useTheme();

    // Basic usage example code
    const basicUsageCode = `import React, { useState } from 'react';
import { GanttChart, Task, TaskGroup } from 'react-modern-gantt';

const MyGanttComponent = () => {
  // Define your task data
  const tasks = [
    {
      id: "team-1",
      name: "Engineering",
      description: "Development Team",
      tasks: [
        {
          id: "task-1",
          name: "Website Redesign",
          startDate: new Date(2023, 0, 1),
          endDate: new Date(2023, 2, 15),
          color: "bg-blue-500",
          percent: 75,
        },
        // More tasks...
      ],
    },
    // More groups...
  ];

  // Task update handler
  const handleTaskUpdate = (groupId, updatedTask) => {
    // Update your task data here
    console.log("Task updated:", updatedTask);
  };

  return (
    <GanttChart
      tasks={tasks}
      title="Project Timeline"
      showProgress={true}
      onTaskUpdate={handleTaskUpdate}
      viewMode="month" // Options: "day", "week", "month", "quarter", "year"
    />
  );
};`;

    // Installation code
    const installationCode = `npm install react-modern-gantt

# or with yarn
yarn add react-modern-gantt`;

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Hero Section */}
            <div className="text-center mb-16">
                <h1
                    className={`text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6 ${
                        darkMode ? "text-white" : "text-gray-900"
                    }`}>
                    React Modern Gantt
                </h1>
                <p className={`text-xl max-w-3xl mx-auto ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                    A flexible, customizable Gantt chart component for React applications with drag-and-drop task
                    scheduling, dark mode support, and multiple view modes.
                </p>
                <div className="mt-8 flex justify-center gap-4">
                    <a
                        href="https://github.com/MikaStiebitz/React-Modern-Gantt/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-6 py-3 rounded-md text-base font-medium ${
                            darkMode
                                ? "bg-indigo-700 text-white hover:bg-indigo-800"
                                : "bg-indigo-600 text-white hover:bg-indigo-700"
                        } transition-colors`}>
                        GitHub
                    </a>
                    <Link
                        to="/components"
                        className={`px-6 py-3 rounded-md text-base font-medium ${
                            darkMode
                                ? "bg-gray-700 text-white hover:bg-gray-800"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        } transition-colors`}>
                        View Documentation
                    </Link>
                </div>
            </div>

            {/* Features Section */}
            <div className="mb-16">
                <h2 className={`text-3xl font-bold text-center mb-12 ${darkMode ? "text-white" : "text-gray-900"}`}>
                    Key Features
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Feature cards */}
                    {[
                        {
                            title: "Interactive Timeline",
                            desc: "Drag-and-drop task scheduling with intuitive controls for resizing and rescheduling tasks.",
                        },
                        {
                            title: "Multiple View Modes",
                            desc: "Day, Week, Month, Quarter, and Year view modes to fit your project timeline needs.",
                        },
                        {
                            title: "Customizable Design",
                            desc: "Built with Tailwind CSS for easy customization with dark mode support and responsive design.",
                        },
                        {
                            title: "Progress Tracking",
                            desc: "Visual indicators and interactive updates for task completion percentages.",
                        },
                        {
                            title: "Task Dependencies",
                            desc: "Support for tracking and visualizing dependencies between tasks.",
                        },
                        {
                            title: "Event Handling",
                            desc: "Comprehensive event handling for clicks, updates, and selections.",
                        },
                    ].map((feature, index) => (
                        <div
                            key={index}
                            className={`p-6 rounded-lg shadow-md ${darkMode ? "bg-gray-800" : "bg-white"}`}>
                            <h3 className={`text-xl font-bold mb-3 ${darkMode ? "text-white" : "text-gray-900"}`}>
                                {feature.title}
                            </h3>
                            <p className={darkMode ? "text-gray-300" : "text-gray-600"}>{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Installation Section */}
            <div className="mb-16" id="installation">
                <h2 className={`text-3xl font-bold mb-8 ${darkMode ? "text-white" : "text-gray-900"}`}>Installation</h2>
                {createElement(CodeExample, {
                    title: "Install with npm or yarn",
                    description: "Add React Modern Gantt to your project using npm or yarn.",
                    code: installationCode,
                    language: "bash",
                })}
            </div>

            {/* Basic Usage Section */}
            <div className="mb-16">
                <h2 className={`text-3xl font-bold mb-8 ${darkMode ? "text-white" : "text-gray-900"}`}>Basic Usage</h2>
                {createElement(CodeExample, {
                    title: "Simple Implementation",
                    description: "A basic example of using the GanttChart component.",
                    code: basicUsageCode,
                    language: "jsx",
                })}
            </div>

            {/* Demo Section */}
            <div className="mb-16">
                <h2 className={`text-3xl font-bold mb-8 ${darkMode ? "text-white" : "text-gray-900"}`}>
                    Interactive Demo
                </h2>
                {createElement(GanttDemo)}
            </div>

            {/* CTA Section */}
            <div className="text-center mb-8">
                <h2 className={`text-2xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
                    Ready to Build Impressive Project Timelines?
                </h2>
                <p className={`mb-8 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                    Explore the full capabilities of React Modern Gantt and start creating interactive timelines today.
                </p>
                <Link
                    to="/components"
                    className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm ${
                        darkMode
                            ? "bg-indigo-700 text-white hover:bg-indigo-800"
                            : "bg-indigo-600 text-white hover:bg-indigo-700"
                    } transition-colors`}>
                    View Component Documentation
                </Link>
            </div>
        </div>
    );
};

export default HomePage;
