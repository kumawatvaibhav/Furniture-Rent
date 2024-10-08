import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {Textarea} from "@nextui-org/input";

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-6 px-4 md:px-6">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="w-12 h-12 md:w-16 md:h-16">
              <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <h1 className="text-xl font-semibold md:text-2xl">Catherine Johnson</h1>
              <p className="text-sm text-primary-foreground/80">catherine@ario.com</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="secondary" size="sm">
              Account Details
            </Button>
            <Button variant="outline" size="sm" className="text-black">
              Logout
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 py-8 px-4 md:px-6">
        <div className="container grid gap-8">
          <section>
            <h2 className="text-2xl font-semibold">Rented Furniture</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="grid gap-4">
                  <img
                    src="/placeholder.svg"
                    alt="Furniture Image"
                    width={300}
                    height={200}
                    className="mt-5 rounded-lg object-cover aspect-[3/2]"
                  />
                  <div className="grid gap-1">
                    <h3 className="text-lg font-semibold">Modern Leather Sofa</h3>
                    <p className="text-muted-foreground">Rented since: June 15, 2023</p>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        Return
                      </Button>
                      <Button variant="outline" size="sm">
                        Extend
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-semibold">Past Orders</h2>
            <div className="grid gap-4">
              <Card>
                <CardContent className="grid gap-4 md:grid-cols-[1fr_auto]">
                  <div className="mt-5 grid gap-2">
                    <h3 className="text-lg font-semibold">Scandinavian Armchair</h3>
                    <p className="text-muted-foreground">Rented from: September 1, 2022 - November 1, 2022</p>
                    <p className="text-muted-foreground">Total: $299 + $50 delivery</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      Rent Again
                    </Button>
                    <Button variant="outline" size="sm">
                      Leave Review
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-semibold">Update Profile</h2>
            <Card>
              <CardContent className="mt-5 grid gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" defaultValue="Catherine Johnson" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="catherine@ario.com" />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="address">Address</Label>
                  <Textarea id="address" rows={3} defaultValue="123 Main St, Anytown USA 12345" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" defaultValue="(123) 456-7890" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="ml-auto">Update Profile</Button>
              </CardFooter>
            </Card>
          </section>
        </div>
      </main>
    </div>
  )
}