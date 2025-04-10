import Image from "next/image";
import Link from "next/link";
import {
  Search,
  ShoppingCart,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Bar */}
      <div className="bg-[#1a2e3a] text-white py-1.5 text-right text-xs">
        <div className="container mx-auto px-4">
          <Link href="#" className="hover:underline">
            Visit our showroom
          </Link>
        </div>
      </div>

      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto py-3 px-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="mr-8">
            <Image
              src="/john-bead-logo.png"
              alt="John Bead"
              width={120}
              height={32}
              className="h-8 w-auto"
            />
          </Link>

          {/* Search */}
          <div className="flex-1 max-w-xl relative">
            <Input
              type="text"
              placeholder="Search for..."
              className="w-full border rounded-md pr-10 h-9"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">
              <Search className="h-4 w-4" />
            </button>
          </div>

          {/* Account & Cart */}
          <div className="flex items-center ml-8 gap-6 text-sm">
            <Link href="/account" className="flex items-center">
              <span className="mr-1">Hi, EmilyK</span>
              <span className="text-gray-500">#3333333</span>
            </Link>
            <Link href="/cart" className="flex items-center">
              <ShoppingCart className="h-4 w-4 mr-2" />
              <span>Cart (3)</span>
            </Link>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="container mx-auto px-4 py-2 flex flex-wrap items-center text-xs">
          <Link href="/sitemap" className="mr-6 uppercase font-medium">
            Sitemap
          </Link>
          <div className="flex items-center mr-6 uppercase font-medium">
            <Link href="/categories">All Categories</Link>
            <ChevronDown className="h-3 w-3 ml-1" />
          </div>
          <div className="flex items-center mr-6 uppercase font-medium">
            <Link href="/new-arrivals">New Arrivals</Link>
            <ChevronDown className="h-3 w-3 ml-1" />
          </div>
          <div className="flex items-center mr-6 uppercase font-medium">
            <Link href="/first-nations">First Nations</Link>
            <ChevronDown className="h-3 w-3 ml-1" />
          </div>
          <div className="flex items-center mr-6 uppercase font-medium">
            <Link href="/carnival-dance">Carnival & Dance</Link>
            <ChevronDown className="h-3 w-3 ml-1" />
          </div>
          <div className="flex items-center mr-6 uppercase font-medium">
            <Link href="/craft-stores">Craft Stores</Link>
            <ChevronDown className="h-3 w-3 ml-1" />
          </div>
          <Link href="/clearance" className="mr-6 uppercase font-medium">
            Clearance
          </Link>
          <Link href="/catalogs" className="mr-6 uppercase font-medium">
            Catalogs
          </Link>
          <Link href="/projects" className="mr-6 uppercase font-medium">
            Projects
          </Link>
          <Link href="/featured-programs" className="uppercase font-medium">
            Featured Programs
          </Link>
        </nav>
      </header>

      <main>
        {/* Hero Banner */}
        <section className="relative">
          <div className="relative h-[260px]">
            <Image
              src="/maple-leaf-beads.jpg"
              alt="Maple Leaf Beads"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 px-4 py-10">
              <div className="max-w-md text-white">
                <h1 className="text-4xl font-bold mb-2">Maple Leaf Beads</h1>
                <p className="mb-4 text-sm">
                  John Bead Corp is open and shipping all orders.
                  <br />
                  Only our showroom is closed to visitors at this time.
                </p>
                <Button className="bg-[#1a2e3a] hover:bg-[#2a3e4a] text-white uppercase text-xs px-6 py-2 h-8">
                  SHOP NOW
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Crystal Lane Promo */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8 border rounded-md overflow-hidden">
              <div className="md:w-1/2 relative">
                <Image
                  src="/crystal-lane-strands.jpg"
                  alt="Crystal Lane strands"
                  width={400}
                  height={230}
                  className="w-full h-auto"
                />
                <div className="absolute top-4 left-4">
                  <Image
                    src="/john-bead-logo.png"
                    alt="John Bead"
                    width={100}
                    height={25}
                  />
                </div>
                <button className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 shadow-md">
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 shadow-md">
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
              <div className="md:w-1/2 p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                  Our Crystal Lane strands are a bestseller!
                </h2>
                <p className="text-sm text-gray-600 mb-2">
                  Our glass bead double strands (7 inches for twice the beads)
                  are available in stunning clear, opal and opaque colors.
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  Original sizes: 3x4mm, 4x6mm, 6x8mm and 8x10mm
                  <br />
                  New petite size is 1.5 x 2.5 mm
                </p>
                <Button className="bg-[#1a5173] hover:bg-[#2a6183] text-white uppercase text-xs px-6 py-2 h-8">
                  SHOP NOW
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-base font-bold uppercase mb-6 text-gray-700">
              FEATURED PRODUCTS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {/* Product 1 */}
              <div className="bg-white border rounded-md overflow-hidden">
                <div className="p-4 pb-0">
                  <div className="aspect-square relative mb-2">
                    <Image
                      src="/amethyst-cluster.jpg"
                      alt="Semi-Precious 20x25mm Amethyst Cluster Pendant"
                      width={200}
                      height={200}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <h3 className="text-xs font-medium text-center mb-1 h-12 overflow-hidden">
                    Semi-Precious 20x25mm Amethyst Cluster Pendant with Bail
                    Electro Plated Imitation Rhodium
                  </h3>
                  <div className="text-xs text-center text-gray-500 mb-1 flex items-center justify-center">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                    <span>In stock</span>
                  </div>
                  <div className="text-xs text-center mb-3">
                    2 at $ 2.28 | 4 at $1.52
                    <br />
                    12 at $1.26
                  </div>
                </div>
                <div className="bg-gray-100 p-2 flex items-center justify-between">
                  <div className="text-xs">Units:</div>
                  <div className="flex items-center">
                    <Input
                      type="number"
                      defaultValue="1"
                      className="w-10 h-7 text-center text-xs mr-2"
                    />
                    <Button className="bg-[#1a5173] hover:bg-[#2a6183] text-white text-[10px] h-7 px-2">
                      ADD TO CART
                    </Button>
                  </div>
                </div>
              </div>

              {/* Product 2 */}
              <div className="bg-white border rounded-md overflow-hidden">
                <div className="p-4 pb-0">
                  <div className="aspect-square relative mb-2">
                    <Image
                      src="/gold-seed-beads.jpg"
                      alt="Czech Seed Bead 11/0 Metallic Gold"
                      width={200}
                      height={200}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <h3 className="text-xs font-medium text-center mb-1 h-12 overflow-hidden">
                    Czech Seed Bead 11/0 Metallic Gold 6g/23g
                  </h3>
                  <div className="text-xs text-center text-red-500 mb-1 flex items-center justify-center">
                    <span className="inline-block w-2 h-2 bg-red-500 rounded-full mr-1"></span>
                    <span>Out of Stock</span>
                  </div>
                  <div className="text-xs text-center mb-3">
                    3 at $2.37g | at $1.89
                    <br />
                    12 at $1.39 | 24 at $1.14
                  </div>
                </div>
                <div className="bg-gray-100 p-2 flex items-center justify-between">
                  <div className="text-xs">Units:</div>
                  <div className="flex items-center">
                    <Input
                      type="number"
                      defaultValue="1"
                      className="w-10 h-7 text-center text-xs mr-2"
                    />
                    <Button className="bg-[#1a5173] hover:bg-[#2a6183] text-white text-[10px] h-7 px-2">
                      ADD TO CART
                    </Button>
                  </div>
                </div>
              </div>

              {/* Product 3 */}
              <div className="bg-white border rounded-md overflow-hidden">
                <div className="p-4 pb-0">
                  <div className="aspect-square relative mb-2">
                    <Image
                      src="/white-seed-beads.jpg"
                      alt="Czech Seed Bead 10/0 Opaque White Strung"
                      width={200}
                      height={200}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <h3 className="text-xs font-medium text-center mb-1 h-12 overflow-hidden">
                    Czech Seed Bead 10/0 Opaque White Strung
                  </h3>
                  <div className="text-xs text-center text-gray-500 mb-1 flex items-center justify-center">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                    <span>In stock</span>
                  </div>
                  <div className="text-xs text-center mb-3">
                    1 at $24.25 | 2 at $18.84
                    <br />3 at $15.88 | 5 at $13.91
                  </div>
                </div>
                <div className="bg-gray-100 p-2 flex items-center justify-between">
                  <div className="text-xs">Units:</div>
                  <div className="flex items-center">
                    <Input
                      type="number"
                      defaultValue="1"
                      className="w-10 h-7 text-center text-xs mr-2"
                    />
                    <Button className="bg-[#1a5173] hover:bg-[#2a6183] text-white text-[10px] h-7 px-2">
                      ADD TO CART
                    </Button>
                  </div>
                </div>
              </div>

              {/* Product 4 */}
              <div className="bg-white border rounded-md overflow-hidden">
                <div className="p-4 pb-0">
                  <div className="aspect-square relative mb-2">
                    <Image
                      src="/amethyst-beads.jpg"
                      alt="Semi-Precious 16x 8mm Dogteeth Amethyst Natural"
                      width={200}
                      height={200}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <h3 className="text-xs font-medium text-center mb-1 h-12 overflow-hidden">
                    Semi-Precious 16x 8mm Dogteeth Amethyst Natural
                  </h3>
                  <div className="text-xs text-center text-gray-500 mb-1 flex items-center justify-center">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                    <span>In stock</span>
                  </div>
                  <div className="text-xs text-center mb-3">
                    1 at $14.31 | 2 at $12.56
                    <br />4 at $8.18 | 12 at $6.79
                  </div>
                </div>
                <div className="bg-gray-100 p-2 flex items-center justify-between">
                  <div className="text-xs">Units:</div>
                  <div className="flex items-center">
                    <Input
                      type="number"
                      defaultValue="1"
                      className="w-10 h-7 text-center text-xs mr-2"
                    />
                    <Button className="bg-[#1a5173] hover:bg-[#2a6183] text-white text-[10px] h-7 px-2">
                      ADD TO CART
                    </Button>
                  </div>
                </div>
              </div>

              {/* Product 5 */}
              <div className="bg-white border rounded-md overflow-hidden">
                <div className="p-4 pb-0">
                  <div className="aspect-square relative mb-2">
                    <Image
                      src="/swarovski-pendant.jpg"
                      alt="Swarovski Pendant 6925 Rectangle 26mm Crystal Light Vitrail P 1pc"
                      width={200}
                      height={200}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <h3 className="text-xs font-medium text-center mb-1 h-12 overflow-hidden">
                    Swarovski Pendant 6925 Rectangle 26mm Crystal Light Vitrail
                    P 1pc
                  </h3>
                  <div className="text-xs text-center text-gray-500 mb-1 flex items-center justify-center">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                    <span>In stock</span>
                  </div>
                  <div className="text-xs text-center mb-3">
                    1 at $18.26 | 2 at $16.25
                    <br />4 at $12.72 | 6 at $11.48
                  </div>
                </div>
                <div className="bg-gray-100 p-2 flex items-center justify-between">
                  <div className="text-xs">Units:</div>
                  <div className="flex items-center">
                    <Input
                      type="number"
                      defaultValue="1"
                      className="w-10 h-7 text-center text-xs mr-2"
                    />
                    <Button className="bg-[#1a5173] hover:bg-[#2a6183] text-white text-[10px] h-7 px-2">
                      ADD TO CART
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Categories */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-base font-bold uppercase mb-6 text-gray-700">
              FEATURED
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Category 1 */}
              <div className="relative h-[180px] rounded-md overflow-hidden">
                <Image
                  src="/czech-beads.jpg"
                  alt="Preciosa Traditional Czech Beads"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-lg font-bold">
                    Preciosa Traditional
                    <br />
                    Czech Beads
                  </h3>
                </div>
              </div>

              {/* Category 2 */}
              <div className="relative h-[180px] rounded-md overflow-hidden">
                <Image
                  src="/preciosa-crystals.jpg"
                  alt="Preciosa Crystals"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-lg font-bold">Preciosa Crystals</h3>
                </div>
              </div>

              {/* Category 3 */}
              <div className="relative h-[180px] rounded-md overflow-hidden">
                <Image
                  src="/miyuki-delicas.jpg"
                  alt="Miyuki Delicas and Seed Beads"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-lg font-bold">
                    Miyuki Delicas and
                    <br />
                    Seed Beads
                  </h3>
                </div>
              </div>

              {/* Category 4 */}
              <div className="relative h-[180px] rounded-md overflow-hidden">
                <Image
                  src="/swarovski.jpg"
                  alt="Swarovski"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-lg font-bold">Swarovski</h3>
                </div>
              </div>

              {/* Category 5 */}
              <div className="relative h-[180px] rounded-md overflow-hidden">
                <Image
                  src="/meet-betsy.jpg"
                  alt="Meet Betsy - Queen of Beads"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-lg font-bold">
                    Meet Betsy - Queen
                    <br />
                    of Beads
                  </h3>
                </div>
              </div>

              {/* Category 6 */}
              <div className="relative h-[180px] rounded-md overflow-hidden">
                <Image
                  src="/carnival-dance.jpg"
                  alt="Carnival & Dance"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-lg font-bold">Carnival & Dance</h3>
                </div>
              </div>

              {/* Category 7 */}
              <div className="relative h-[180px] rounded-md overflow-hidden">
                <Image
                  src="/craft-stores.jpg"
                  alt="Craft Stores"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-lg font-bold">Craft Stores</h3>
                </div>
              </div>

              {/* Category 8 */}
              <div className="relative h-[180px] rounded-md overflow-hidden">
                <Image
                  src="/fashion-embellishments.jpg"
                  alt="Fashion Embellishments"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-lg font-bold">
                    Fashion
                    <br />
                    Embellishments
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white pt-8 pb-4 border-t mt-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <Image
                src="/john-bead-logo.png"
                alt="John Bead"
                width={120}
                height={32}
                className="mb-4"
              />
              <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                John Bead is a Canadian wholesale supplier where artists and
                retailers can purchase fine quality and limitless elegance of
                Czech crystal beads, findings, and jewelry making supplies.
              </p>
              <div className="flex space-x-2">
                <Link
                  href="#"
                  className="bg-[#1a5173] text-white rounded-full p-1.5"
                >
                  <svg
                    className="h-3 w-3"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="bg-[#1a5173] text-white rounded-full p-1.5"
                >
                  <svg
                    className="h-3 w-3"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="bg-[#1a5173] text-white rounded-full p-1.5"
                >
                  <svg
                    className="h-3 w-3"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="bg-[#1a5173] text-white rounded-full p-1.5"
                >
                  <svg
                    className="h-3 w-3"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="text-sm font-bold mb-4 uppercase">CONTACT US</h3>
              <p className="text-xs text-gray-600 mb-1">Tel: (416) 757-3287</p>
              <p className="text-xs text-gray-600 mb-4">
                Email: info@johnbead.com
              </p>
              <p className="text-xs text-gray-600">
                20 Bertrand Ave, Toronto,
                <br />
                ON M1L 2P4
              </p>
            </div>

            {/* Customer Portal */}
            <div>
              <h3 className="text-sm font-bold mb-4 uppercase">
                CUSTOMER PORTAL
              </h3>
              <div className="flex mb-4">
                <Link
                  href="/account"
                  className="text-[#1a5173] hover:underline text-xs mr-4"
                >
                  My account
                </Link>
                <span className="text-gray-400">|</span>
                <Link
                  href="/logout"
                  className="text-[#1a5173] hover:underline text-xs ml-4"
                >
                  Logout
                </Link>
              </div>
              <div className="flex items-center mb-4">
                <span className="text-xs mr-2">You are shipping in:</span>
                <Image
                  src="/usa-flag.png"
                  alt="USA"
                  width={24}
                  height={16}
                  className="border"
                />
              </div>
              <h3 className="text-sm font-bold mb-4 uppercase">NEWSLETTER</h3>
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Enter email..."
                  className="rounded-l-md border-r-0 h-8 text-xs"
                />
                <Button className="bg-[#1a5173] hover:bg-[#2a6183] text-white rounded-l-none uppercase text-xs h-8">
                  JOIN
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t pt-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center mb-4 md:mb-0">
                <Image
                  src="/mastercard.png"
                  alt="Mastercard"
                  width={30}
                  height={20}
                  className="mr-2"
                />
                <Image
                  src="/visa.png"
                  alt="Visa"
                  width={30}
                  height={20}
                  className="mr-2"
                />
                <Image
                  src="/amex.png"
                  alt="American Express"
                  width={30}
                  height={20}
                />
              </div>
              <p className="text-xs text-gray-500">
                John Bead is Copyright © 2019. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
