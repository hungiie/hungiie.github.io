"use client"

import Image from "next/image";
import MyButton from "@/components/my-button";
import Footer from "@/components/footer";
import { ImageZoom } from "@/components/ui/shadcn-io/image-zoom";
import SlideUpNoThres from "@/components/slide-up-nothres";
import MyNav2 from "@/components/nav2";
import DotsMenu from "@/components/menu";

export default function Visuals() {
  return (
    <div>
        <MyNav2 variant="Projects to home"/>
        <SlideUpNoThres>
        <div className="w-full flex flex-col items-center justify-center self-center bg-transparent">
            <div className="px-10 md:w-2/3 md:px-0 lg:w-[75%] 2xl:w-[75%]">

                <div className="w-full mt-20">
                    <div className="w-full flex justify-between items-center">
                        <MyButton variant="hyperlink" text="Return to home" link="/" textSize="text-sm" target="_self"/>
                        <div className="block md:hidden">
                            <DotsMenu/>
                        </div>
                        <div className="hidden md:flex">
                            <MyButton variant="blue-button-outline" text="About me" link="about" textSize="text-sm" target="_self"/>
                            <div className="ml-3"></div>
                            <MyButton variant="blue-button" text="Resume" link="https://drive.google.com/file/d/1JYPJBnjpH8uPTDL_dIxU2rgNodNIwsK1/view?usp=sharing" textSize="text-sm" target="_blank"/>
                        </div>
                    </div>
                </div>

                <div className="mb-20"></div>

                <p className="text-md text-[var(--colour-bodytext)] leading-loose">Made with Adobe Illustrator & Adobe After Effects. <span className="text-[var(--colour-bodytext-3)]">Click image to enlarge.</span></p>

                <div className="mb-20"></div>

                <div className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-[1.5fr_3fr] gap-x-4">
                        <div className="md:sticky md:top-30 md:self-start">
                            <p className="text-md text-[var(--colour-bodytext)] mb-4">Fraser Health's Corporate Brochure 🩺</p>
                            <div className="mb-9"></div>
                            <MyButton variant="blue-button-outline" text="View on official site &#8599;" link="https://www.fraserhealth.ca/-/media/Project/FraserHealth/FraserHealth/About-Us/Corporate-Brochure/Organizational-Brochure-2024_FINAL.pdf" textSize="text-sm" target="_blank"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className=" bg-[var(--container-bg)] w-full flex justify-center items-center rounded-2xl">
                                <ImageZoom>
                                    <Image src="/fh-1.png" width={1200} height={1200} className="w-[100%] object-cover rounded-2xl  " alt="Visual design"/>
                                </ImageZoom>
                            </div>
                            <div></div>
                            <div className=" bg-[var(--container-bg)] w-full flex justify-center items-center rounded-2xl">
                                <ImageZoom>
                                    <Image src="/fh-2.png" width={1200} height={1200} className="w-[100%] object-cover rounded-2xl" alt="Visual design"/>
                                </ImageZoom>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <p className="text-md text-[var(--colour-bodytext-3)] mb-4">Fraser Health's Official Corporate Brochure 🩺🫀</p>
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className=" bg-[var(--container-bg)] col-span-2 w-full flex justify-center items-center rounded-2xl">
                        <ImageZoom className="w-[100%]">
                            <Image src="/fh-1.png" width={1200} height={1200} className="w-[100%] justify-center object-cover rounded-2xl  " alt="Visual design"/>
                        </ImageZoom>
                    </div>
                    <div></div>
                    <div className=" bg-[var(--container-bg)] col-span-2 w-full flex justify-center items-center rounded-2xl">
                        <ImageZoom className="w-[100%]">
                            <Image src="/fh-2.png" width={1200} height={1200} className="w-[100%] object-cover rounded-2xl  " alt="Visual design"/>
                        </ImageZoom>
                    </div>
                </div> */}

                <div className="mb-30"></div>

                <div className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-[1.5fr_3fr] gap-x-4">
                        <div className="md:sticky md:top-30 md:self-start">
                            <p className="text-md text-[var(--colour-bodytext)] mb-4">Fraser Health's Planetary Health video 🌱</p>
                            <div className="mb-9"></div>
                            <MyButton variant="blue-button-outline" text="View on Youtube &#8599;" link="https://www.youtube.com/watch?v=ZBhZYYxJFnw" textSize="text-sm" target="_blank"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <video className="object-cover overflow-hidden rounded-3xl" autoPlay controls muted loop playsInline>
                                <source src="videographics.mp4"type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>

                {/* <div className="w-full flex justify-between">
                    <p className="text-md text-[var(--colour-bodytext-3)]">Fraser Health's Planetary Health promotional video 🌱</p>
                    <MyButton variant="blue-button-outline" text="View on Youtube" link="https://www.youtube.com/watch?v=ZBhZYYxJFnw" textSize="text-sm" target="_blank"/>
                </div>
                <div className="mb-4"></div>
                <div className="bg-[var(--container-bg)] w-full flex justify-center items-center py-15 mb-2">
                    <div className="w-[60%]">
                        <video className="object-cover overflow-hidden rounded-3xl" autoPlay controls muted loop playsInline>
                            <source src="videographics.mp4"type="video/mp4" />
                        </video>
                    </div>
                </div> */}

                <div className="mb-30"></div>

                <div className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-[1.5fr_3fr] gap-x-4">
                        <div className="md:sticky md:top-30 md:self-start">
                            <p className="text-md text-[var(--colour-bodytext)] mb-4">Fraser Health's UPCC looping tutorial 🏥</p>
                            <div className="mb-9"></div>
                            <MyButton variant="blue-button-outline" text="View on Youtube &#8599;" link="https://www.youtube.com/watch?v=OhkqwG9JYLw" textSize="text-sm" target="_blank"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <video className="object-cover overflow-hidden rounded-3xl" autoPlay controls muted loop playsInline>
                                <source src="upcc.mp4"type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>

                {/* <div className="w-full flex justify-between">
                    <p className="text-md text-[var(--colour-bodytext-3)]">Fraser Health's UPCC looping tutorial 🏥</p>
                    <MyButton variant="blue-button-outline" text="View on Youtube" link="https://www.youtube.com/watch?v=OhkqwG9JYLw" textSize="text-sm" target="_blank"/>
                </div>
                <div className="mb-4"></div>
                <div className="bg-[var(--container-bg)] w-full flex justify-center items-center rounded-2xl py-15 mb-2">
                    <div className="w-[60%]">
                        <video className="object-cover overflow-hidden rounded-3xl" autoPlay controls muted loop playsInline>
                            <source src="upcc.mp4"type="video/mp4" />
                        </video>
                    </div>
                </div> */}

                <div className="mb-45"></div>

                <SlideUpNoThres>
                    <div className="w-full flex justify-between items-center mb-9">
                        <p className="text-md text-[var(--colour-bodytext)]">VSA promotions 📸</p>
                        <MyButton variant="blue-button-outline" text="View VSA site &#8599;" link="https://www.instagram.com/vsasfu" textSize="text-sm" target="_blank"/>
                    </div>
                <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-2">
                    <ImageZoom className="bg-[var(--container-bg)] overflow-hidden rounded-2xl flex justify-center items-center">
                        <Image src="/movie-2.png" width={1200} height={1200} className="w-[90%] justify-self-center-safe rounded-2xl" alt="Visual design"/>
                    </ImageZoom>
                    <ImageZoom className="bg-[var(--container-bg)] overflow-hidden rounded-2xl flex justify-center items-center">
                        <Image src="/movie-3.png" width={1200} height={1200} className="w-[90%] justify-self-center-safe rounded-2xl" alt="Visual design"/>
                    </ImageZoom>
                    <ImageZoom className="bg-[var(--container-bg)] overflow-hidden rounded-2xl flex justify-center items-center">
                        <Image src="/movie-5.png" width={1200} height={1200} className="w-[90%] justify-self-center-safe rounded-2xl" alt="Visual design"/>
                    </ImageZoom>
                    <div className="col-span-2 bg-[var(--container-bg)] w-full flex justify-center items-center rounded-2xl">
                        <ImageZoom className="bg-[var(--container-bg)] overflow-hidden rounded-2xl flex justify-center items-center">
                            <Image src="/movie-1.png" width={1200} height={1200} className="w-[90%] justify-self-center-safe rounded-2xl" alt="Visual design"/>
                        </ImageZoom>
                    </div>
                    <ImageZoom className="bg-[var(--container-bg)] overflow-hidden rounded-2xl flex justify-center items-center">
                        <Image src="/halloween-1.png" width={1200} height={1200} className="w-[90%] justify-self-center-safe rounded-2xl" alt="Visual design"/>
                    </ImageZoom>
                    <ImageZoom className="bg-[var(--container-bg)] overflow-hidden rounded-2xl flex justify-center items-center">
                        <Image src="/vsa-1.png" width={1200} height={1200} className="w-[90%] justify-self-center-safe rounded-2xl" alt="Visual design"/>
                    </ImageZoom>
                    <ImageZoom className="bg-[var(--container-bg)] overflow-hidden rounded-2xl flex justify-center items-center">
                        <Image src="/vsa-2.png" width={1200} height={1200} className="w-[90%] justify-self-center-safe rounded-2xl" alt="Visual design"/>
                    </ImageZoom>
                    <ImageZoom className="bg-[var(--container-bg)] overflow-hidden rounded-2xl flex justify-center items-center">
                        <Image src="/vsa-3.png" width={1200} height={1200} className="w-[90%] justify-self-center-safe rounded-2xl" alt="Visual design"/>
                    </ImageZoom>
                </div>
                </SlideUpNoThres>

                <div className="mb-30"></div>

                {/* <p className="text-md text-[var(--colour-bodytext-3)] mb-4">VSA - Halloween costume contest promotions 🎃</p>
                <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-2">
                    <ImageZoom className="bg-[var(--container-bg)] overflow-hidden rounded-2xl">
                        <Image src="/halloween-1.png" width={1200} height={1200} className="w-full h-full object-cover rounded-2xl" alt="Visual design"/>
                    </ImageZoom>
                    <div></div>
                </div> */}

                {/* <div className="mb-30"></div>

                <p className="text-md text-[var(--colour-bodytext-3)] mb-4">VSA - Back to School promotions 🏫</p>
                <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-2">
                    <ImageZoom className="bg-[var(--container-bg)] overflow-hidden rounded-2xl">
                        <Image src="/vsa-1.png" width={1200} height={1200} className="w-full h-full object-cover rounded-2xl" alt="Visual design"/>
                    </ImageZoom>
                    <ImageZoom className="bg-[var(--container-bg)] overflow-hidden rounded-2xl">
                        <Image src="/vsa-2.png" width={1200} height={1200} className="w-full h-full object-cover rounded-2xl" alt="Visual design"/>
                    </ImageZoom>
                    <ImageZoom className="bg-[var(--container-bg)] overflow-hidden rounded-2xl">
                        <Image src="/vsa-3.png" width={1200} height={1200} className="w-full h-full object-cover rounded-2xl" alt="Visual design"/>
                    </ImageZoom>
                </div> */}

                {/* <div className="mb-30"></div>

                <p className="text-md text-[var(--colour-bodytext-3)] mb-9">Greenwich university's Cultural festival 🌎</p>
                <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-2">
                    <ImageZoom>
                        <Image src="/w-1.png" width={1200} height={1200} className="w-full h-full object-cover rounded-2xl  " alt="Visual design"/>
                    </ImageZoom>
                    <ImageZoom>
                        <Image src="/w-2.png" width={1200} height={1200} className="w-full h-full object-cover rounded-2xl  " alt="Visual design"/>
                    </ImageZoom>
                    <ImageZoom>
                        <Image src="/w-3.png" width={1200} height={1200} className="w-full h-full object-cover rounded-2xl  " alt="Visual design"/>
                    </ImageZoom>
                </div> */}

                <div className="mb-40"></div>

                

                <div className="w-full flex justify-center items-center">
                    <MyButton variant="blue-button-outline" text="Return to home" link="/" textSize="text-sm" target="_self"/>
                </div>

                <div className="w-full">
                    <Footer/>
                </div>

            </div>
        </div>
        </SlideUpNoThres>
    </div>
  );
}
