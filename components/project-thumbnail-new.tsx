"use client"

import Image from "next/image";
import MyButton from "./my-button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface Props {
    name: string;
    desc: string;
    imageSrc: string;
    imageSrcDark: string;
    imageSrcPoster: string;
    imageSrcPosterDark: string;
    link: string;
    target: string;
    isLink: string;
    type: string;
}

export default function ProjectThumbnailNew(props: Props) {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) {
        return null;
    }
    
    if (props.isLink == "image-link") {
        return (
            <div className="h-full flex flex-col group">
                <div className="flex gap-2 flex-col md:flex-row md:justify-between">
                    <p className="text-sm font-medium text-[var(--colour-bodytext)] md:text-[var(--colour-bodytext-3)] md:text-[var(--colour-bodytext-4)] md:group-hover:text-[var(--main-colour)] leading-loose">
                        {props.name}
                    </p>
                    <p className="text-sm text-[var(--colour-bodytext-3)] md:text-[var(--colour-bodytext-4)] md:group-hover:text-[var(--colour-bodytext)] leading-loose">
                        ({props.type})
                    </p>
                </div>
                <div className="mb-3"></div>
                <a className="relative overflow-hidden block group mt-auto bg-[var(--container-bg)] rounded-2xl shadow-[0px_0px_25px_rgba(0,0,0,0.015)] 2xl:shadow-[0px_0px_35px_rgba(0,0,0,0.01)] duration-300" href={props.link} target={props.target}>
                    {theme === "dark" ? (
                        <Image
                            src={props.imageSrcDark}
                            alt={props.name}
                            width={1640}
                            height={1228}
                            className="object-cover"
                        />
                    ) : (
                        <Image
                            src={props.imageSrc}
                            alt={props.name}
                            width={1640}
                            height={1228}
                            className="object-cover"
                        />
                    )}
                </a>
            </div>
        );
    }
    else if (props.isLink == "video-link") {
        return (
            <div className="h-full flex flex-col group">
                <div className="flex gap-2 flex-col md:flex-row md:justify-between">
                    <p className="text-sm font-medium text-[var(--colour-bodytext)] md:text-[var(--colour-bodytext-3)] md:text-[var(--colour-bodytext-4)] leading-loose md:group-hover:text-[var(--main-colour)]">
                        {props.name}
                    </p>
                    <p className="text-sm text-[var(--colour-bodytext-3)] md:text-[var(--colour-bodytext-4)] md:group-hover:text-[var(--colour-bodytext)] leading-loose">
                        ({props.type})
                    </p>
                </div>
                <div className="mb-3"></div>
                <a className="relative overflow-hidden block group mt-auto bg-[var(--container-bg)] rounded-2xl shadow-[0px_0px_25px_rgba(0,0,0,0.015)] 2xl:shadow-[0px_0px_35px_rgba(0,0,0,0.01)] duration-300" href={props.link} target={props.target}>
                    {theme === "dark" ? (
                        <video className={`w-full h-full object-cover !bg-transparent block`} style={{ clipPath: "inset(-1px -1px)" }} autoPlay muted loop playsInline poster={props.imageSrcPosterDark}>
                            <source src={props.imageSrcDark} type="video/mp4" />
                        </video>
                    ) : (
                        <video className={`w-full h-full object-cover !bg-transparent block`} style={{ clipPath: "inset(-1px -1px)" }} autoPlay muted loop playsInline poster={props.imageSrcPoster}>
                            <source src={props.imageSrc} type="video/mp4" />
                        </video>
                    )}
                </a>
            </div>
        );
    }
    else if (props.isLink == "coming-soon") {
        return (
            <div className="h-full flex flex-col group">
                <div className="flex gap-2 flex-col md:flex-row md:justify-between">
                    <p className="text-sm font-medium text-[var(--colour-bodytext)] md:text-[var(--colour-bodytext-3)] md:text-[var(--colour-bodytext-4)] leading-loose md:group-hover:text-[var(--main-colour)]">
                        {props.name}
                    </p>
                    <p className="text-sm text-[var(--colour-bodytext-3)] md:text-[var(--colour-bodytext-4)] md:group-hover:text-[var(--colour-bodytext)] leading-loose">
                        ({props.type})
                    </p>
                </div>
                <div className="mb-3"></div>
                <div className="relative overflow-hidden block group mt-auto bg-[var(--container-bg)] rounded-2xl shadow-[0px_0px_25px_rgba(0,0,0,0.015)] 2xl:shadow-[0px_0px_35px_rgba(0,0,0,0.01)] duration-300 inline">
                    <Image src={props.imageSrc} alt={props.name} width={1640} height={1228} className="object-cover"/>
                </div>
            </div>
        );
    }
}