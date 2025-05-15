"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"



const components = [
    {
        title: "Home",
        href: "/",
        description: "Welcome to the homepage where you can access all features and resources at a glance.",
    },
    {
        title: "Donate",
        href: "#",
        description: "Support the cause by donating. Every contribution helps us grow and assist others.",
    },
    {
        title: "Team",
        href: "/team",
        description: "Meet the team behind the project. Get to know the minds driving the mission forward.",
    },
    {
        title: "Apply",
        href: "#",
        description: "Explore libraries and tools designed to support your career journey and job search.",
    },
    {
        title: "Social",
        href: "#",
        description: "Create and analyze your resume for feedback, recommendations, and improvements.",
    },
    {
        title: "Blog",
        href: "#",
        description: "Read our blog for updates on algorithms, job searches, and career-related insights.",
    },
];


export default function NavBar() {
  return (
    <NavigationMenu className=" rounded-xl px-4 py-2 shadow-md">
        <NavigationMenuList className="flex gap-3">
            
            <NavigationMenuItem>
                <NavigationMenuLink
                className=" border text-purple-200 bg-transparent hover:border-purple-500 rounded-full px-4 py-2 transition-colors"
                >
                    Home
                </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
            <NavigationMenuTrigger className="border text-purple-200 bg-transparent hover:border-purple-500 rounded-full px-4 py-2 transition-colors">
                Getting started
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-black text-white rounded-md shadow-lg">
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                    <NavigationMenuLink asChild>
                    <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-purple-800 to-black p-6 no-underline outline-none hover:shadow-lg transition-shadow"
                        href="/"
                    >
                        <div className="mb-2 mt-4 text-lg font-semibold text-purple-200">
                        Hack United
                        </div>
                        <p className="text-sm leading-tight text-gray-400">
                        a 501(c)(3) non-profit organization founded by teenagers with a passion for programming and technology.
                        </p>
                    </a>
                    </NavigationMenuLink>
                </li>
                <ListItem href="#About" title="Introduction">
                    Learn more what Hack United is about.
                </ListItem>
                <ListItem href="#Tutorial" title="Hackathons">
                    What are the hackathons of Hack United
                </ListItem>
                <ListItem href="#Goals" title="Goal">
                    We envision an inclusive platform where everyone can learn about the exciting advancements in the tech field
                </ListItem>
                </ul>
            </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
            <NavigationMenuTrigger className="border text-purple-200 bg-transparent hover:border-purple-500 rounded-full px-4 py-2 transition-colors">
                Components
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-black text-white rounded-md shadow-lg">
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {components.map((component) => (
                    <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                    >
                    {component.description}
                    </ListItem>
                ))}
                </ul>
            </NavigationMenuContent>
            </NavigationMenuItem>

        </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  });
  
  ListItem.displayName = "ListItem";