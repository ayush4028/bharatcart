import React from "react";
import { Card, CardHeader, CardBody, Divider, Image } from "@nextui-org/react";
import svg from "./Images/svg/app.svg"
import svg1 from "./Images/svg/app1.svg"

export default function App() {
  return (
    <>
    <div className="h-screen bg-[#EDEFFA]">
    <div className=" flex justify-center px-10">
        <Card className="max-w-[400px] mx-5 my-5">
          <CardHeader className="flex gap-3">
            <Image
              alt="nextui logo"
              height={40}
              radius="sm"
              src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-1xl">App Development</p>
              {/* <p className="text-small text-default-500">nextui.org</p> */}
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>Make beautiful websites regardless of your design experience.</p>
          </CardBody>
          <Divider />
          {/* <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/nextui-org/nextui"
        >
          Visit source code on GitHub.
        </Link>
      </CardFooter> */}
        </Card>
        <Card className="max-w-[400px] mx-5 my-5">
          <CardHeader className="flex gap-3">
            <Image
              alt="nextui logo"
              height={40}
              radius="sm"
              src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-1xl">App Development</p>
              {/* <p className="text-small text-default-500">nextui.org</p> */}
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>Make beautiful websites regardless of your design experience.</p>
          </CardBody>
          <Divider />
          {/* <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/nextui-org/nextui"
        >
          Visit source code on GitHub.
        </Link>
      </CardFooter> */}
        </Card>
        <Card className="max-w-[400px] mx-5 my-5">
          <CardHeader className="flex gap-3">
            <Image
              alt="nextui logo"
              height={40}
              radius="sm"
              src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-1xl">App Development</p>
              {/* <p className="text-small text-default-500">nextui.org</p> */}
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>Make beautiful websites regardless of your design experience.</p>
          </CardBody>
          <Divider />
          {/* <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/nextui-org/nextui"
        >
          Visit source code on GitHub.
        </Link>
      </CardFooter> */}
        </Card>
        <Card className="max-w-[400px] mx-5 my-5">
          <CardHeader className="flex gap-3">
            <Image
              alt="nextui logo"
              height={40}
              radius="sm"
              src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-1xl">App Development</p>
              {/* <p className="text-small text-default-500">nextui.org</p> */}
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>Make beautiful websites regardless of your design experience.</p>
          </CardBody>
          <Divider />
          {/* <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/nextui-org/nextui"
        >
          Visit source code on GitHub.
        </Link>
      </CardFooter> */}
        </Card>
      </div>
      <div className=" flex justify-center px-10">
        <Card className="max-w-[400px]  mx-5 my-5">
          <CardHeader className="flex gap-3">
            <Image
              alt="nextui logo"
              height={40}
              radius="sm"
              src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-1xl">App Development</p>
              {/* <p className="text-small text-default-500">nextui.org</p> */}
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>Make beautiful websites regardless of your design experience.</p>
          </CardBody>
          <Divider />
          {/* <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/nextui-org/nextui"
        >
          Visit source code on GitHub.
        </Link>
      </CardFooter> */}
        </Card>
       
        
        <Card className="max-w-[400px] mx-5 my-5">
          <CardHeader className="flex gap-3">
            <Image
              alt="nextui logo"
              height={60}
              src={svg}
              width={60}
            />
            <div className="flex flex-col">
              <p className="text-lg font-bold ">App Development</p>
              {/* <p className="text-small text-default-500">nextui.org</p> */}
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>Make beautiful websites regardless of your design experience.</p>
          </CardBody>
          <Divider />
        </Card>
        <Card className="max-w-[400px] mx-5 my-5">
          <CardHeader className="flex gap-3">
            <Image
              alt="nextui logo"
              height={60}
              src={svg1}
              width={60}
            />
            <div className="flex flex-col">
              <p className="text-lg font-bold text-[#012652]">App Development</p>
              {/* <p className="text-small text-default-500">nextui.org</p> */}
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>Make beautiful websites regardless of your design experience.</p>
          </CardBody>
          <Divider />
        </Card>
        <Card className="max-w-[400px] mx-5 my-5">
          <CardHeader className="flex gap-3">
            <Image
              alt="nextui logo"
              height={60}
              src={svg1}
              width={60}
            />
            <div className="flex flex-col">
              <p className="text-lg font-bold text-[#012652]">App Development</p>
              {/* <p className="text-small text-default-500">nextui.org</p> */}
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>Make beautiful websites regardless of your design experience.</p>
          </CardBody>
          <Divider />
        </Card>
      </div>
    </div>
      
    </>


  );
}
