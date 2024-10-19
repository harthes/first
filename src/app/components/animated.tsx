"use client";

import React, { useState } from "react";
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from "@react-spring/web";
import Image from "next/image";

import data from "./data";
import styles from "./styles.module.css";

export default function Animated() {
  const [open, set] = useState(false);

  const springApi = useSpringRef();
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { size: "20%", background: "hotpink" },
    to: {
      size: open ? "100%" : "20%",
      background: open ? "white" : "hotpink",
    },
  });

  const transApi = useSpringRef();
  const transition = useTransition(open ? data : [], {
    ref: transApi,
    trail: 400 / data.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  });

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springApi, transApi] : [transApi, springApi], [
    0,
    open ? 0.1 : 0.6,
  ]);

  function onOpen() {
    return set((open) => !open);
    if (!open) {
      // return set(() => true);
    }
  }

  function onClose() {
    if (open) {
      return set(() => false);
    }
  }

  function onClickItem() {
    set(() => false);
    return alert("dasdsad");
  }

  return (
    <div className={styles.wrapper}>
      <animated.div
        style={{ ...rest, width: size, height: size }}
        className={styles.container}
        onClick={onOpen}
      >
        {transition((style, item) => (
          <animated.div
            onClick={onClickItem}
            className={styles.item}
            style={{ ...style, background: item.css }}
          >
            {item.name}
          </animated.div>
        ))}
      </animated.div>
    </div>
  );
}
