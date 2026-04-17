"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Menu, X, SearchIcon } from "lucide-react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

export function InputGroupDemo() {
  return (
    <div className="w-full max-w-md">
      <InputGroup>
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="border-b">
      <nav className="h-16 flex items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.avif"
            alt="ShopStore logo"
            width={100}
            height={24}
          />
          <span className="text-xl font-semibold">ShopStore</span>
        </Link>

        {/* Desktop Search */}
        <div className="hidden md:flex flex-1 justify-center px-6">
          <InputGroupDemo />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 items-center">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/cart">Cart</Link>
          </li>
          <li>
            <Link href="/orders">Orders</Link>
          </li>
        </ul>

        <div className="md:hidden">
          {" "}
          {/* <SearchIcon className="" /> */}
          <button
            className=""
            onClick={() =>setIsSearchOpen(!isSearchOpen)}
            aria-label="Toggle Menu"
          >
          
            {isOpen ?  <SearchIcon  /> :  <SearchIcon  />}
          </button>
          <button
            className=""
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
        {
                isSearchOpen ? <span className="md:hidden flex mb-3 justify-center"><InputGroupDemo  /> </span>:'' 
            }
           
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4">
          {/* Search */}

          {/* Links */}
          <ul className="flex flex-col gap-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/cart">Cart</Link>
            </li>
            <li>
              <Link href="/orders">Orders</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;
