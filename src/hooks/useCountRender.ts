import { useEffect, useRef } from "react";

export default function(): number {
    const counter = useRef<number>(0);
    useEffect(() => {
        counter.current += 1
    })

    return counter.current!
}
