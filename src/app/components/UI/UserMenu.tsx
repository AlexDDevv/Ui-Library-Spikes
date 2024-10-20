import React, { useState } from "react";
import {
    User,
    CreditCard,
    Settings,
    Keyboard,
    Users,
    UserPlus,
    ChevronRight,
    Plus,
    Github,
    MessageCircleQuestion,
    Cloud,
    LogOut,
    CirclePlus,
    Mail,
    MessageSquare
} from "lucide-react";
import { motion, Variants, AnimatePresence } from "framer-motion";

type showMenuType = {
    showMenu: boolean
}

export default function UserMenu({ showMenu }: showMenuType) {
    const menuVariants: Variants = {
        closed: {
            scaleY: 0,
            transformOrigin: "top",
            opacity: 0,
            transition: {
                delay: 0.15,
            },
        },
        open: {
            scaleY: 1,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 0.5,
            },
        },
    };

    const [showSubMenu, setShowSubMenu] = useState(false)

    return (

        <motion.div
            className="absolute min-w-[250px] bg-bgContainer top-[70px] right-8 rounded-lg z-[255] border-2 border-border text-white"
            initial="closed"
            animate={showMenu ? "open" : "closed"}
            exit="closed"
            variants={menuVariants}
        >
            <div className="py-2.5 px-4 border-b-2 border-border">
                <h2 className="font-semibold">My Account</h2>
            </div>
            <div className=" border-b-2 border-border">
                <ul className="flex flex-col gap-3 py-2">
                    <li className="flex items-center gap-3 text-sm font-medium px-4 cursor-pointer transition-padding duration-200 ease-in-out hover:pl-8">
                        <User className="h-4 w-4" />
                        Profile
                    </li>
                    <li className="flex items-center gap-3 text-sm font-medium px-4 cursor-pointer transition-padding duration-200 ease-in-out hover:pl-8">
                        <CreditCard className="h-4 w-4" />
                        Billing
                    </li>
                    <li className="flex items-center gap-3 text-sm font-medium px-4 cursor-pointer transition-padding duration-200 ease-in-out hover:pl-8">
                        <Settings className="h-4 w-4" />
                        Settings
                    </li>
                    <li className="flex items-center gap-3 text-sm font-medium px-4 cursor-pointer transition-padding duration-200 ease-in-out hover:pl-8">
                        <Keyboard className="h-4 w-4" />
                        Keyboard shortcuts
                    </li>
                </ul>
            </div>
            <div className="border-b-2 border-border">
                <ul className="flex flex-col gap-3 py-2">
                    <li className="flex items-center gap-3 text-sm font-medium px-4 cursor-pointer transition-padding duration-200 ease-in-out hover:pl-8">
                        <Users className="h-4 w-4" />
                        Team
                    </li>
                    <div className="flex items-center justify-between gap-5 cursor-pointer px-4 relative">
                        <li className="flex items-center gap-3 text-sm font-medium transition-padding duration-200 ease-in-out hover:pl-4">
                            <UserPlus className="h-4 w-4" />
                            Invite users
                        </li>
                        <ChevronRight className="h-4 w-4" onMouseEnter={() => setShowSubMenu(true)} />
                        <AnimatePresence>
                            {showSubMenu && (
                                <motion.div
                                    className="bg-bgContainer border-2 border-border rounded-[6px_0_0_6px] min-w-[150px] absolute top-0 left-[-150px]"
                                    initial="closed"
                                    animate={showMenu ? "open" : "closed"}
                                    exit="closed"
                                    variants={menuVariants}
                                    onMouseLeave={() => setShowSubMenu(false)}
                                >
                                    <ul className="flex flex-col gap-3 py-2">
                                        <li className="flex items-center gap-3 text-sm font-medium px-4 cursor-pointer transition-padding duration-200 ease-in-out hover:pl-8">
                                            <Mail className="h-4 w-4" />
                                            Mail
                                        </li>
                                        <li className="flex items-center gap-3 text-sm font-medium px-4 cursor-pointer transition-padding duration-200 ease-in-out hover:pl-8">
                                            <MessageSquare className="h-4 w-4" />
                                            Message
                                        </li>
                                    </ul>
                                    <div className="py-2 px-4 flex items-center gap-3 cursor-pointer transition-padding duration-200 ease-in-out hover:pl-8 border-t-2 border-border">
                                        <CirclePlus className="h-4 w-4" />
                                        <p className="text-sm font-medium">More...</p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    <li className="flex items-center gap-3 text-sm font-medium px-4 cursor-pointer transition-padding duration-200 ease-in-out hover:pl-8">
                        <Plus className="h-4 w-4" />
                        New Team
                    </li>
                </ul>
            </div>
            <div className="border-b-2 border-border">
                <ul className="flex flex-col gap-3 py-2">
                    <li className="flex items-center gap-3 text-sm font-medium px-4 cursor-pointer transition-padding duration-200 ease-in-out hover:pl-8">
                        <Github className="h-4 w-4" />
                        GitHub
                    </li>
                    <li className="flex items-center gap-3 text-sm font-medium px-4 cursor-pointer transition-padding duration-200 ease-in-out hover:pl-8">
                        <MessageCircleQuestion className="h-4 w-4" />
                        Support
                    </li>
                    <li className="flex items-center gap-3 text-sm font-medium px-4 cursor-pointer transition-padding duration-200 ease-in-out hover:pl-8">
                        <Cloud className="h-4 w-4" />
                        API
                    </li>
                </ul>
            </div>
            <div className="py-2.5 px-4 flex items-center gap-3 cursor-pointer transition-padding duration-200 ease-in-out hover:pl-8">
                <LogOut className="h-4 w-4" />
                <p className="text-sm font-medium">Log out</p>
            </div>
        </motion.div>
    );
}
