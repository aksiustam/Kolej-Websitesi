import bubble1 from "@/public/image/bubble/bubble1.png";
import bubble2 from "@/public/image/bubble/bubble2.png";
import bubble3 from "@/public/image/bubble/bubble3.png";
import bubble4 from "@/public/image/bubble/bubble4.png";
import bubble5 from "@/public/image/bubble/bubble5.png";
import bubble6 from "@/public/image/bubble/bubble6.png";
import bubble7 from "@/public/image/bubble/bubble7.png";
import bubble8 from "@/public/image/bubble/bubble8.png";
import bubble9 from "@/public/image/bubble/bubble9.png";
import bubble10 from "@/public/image/bubble/bubble10.png";

const buble = [
  bubble1,
  bubble2,
  bubble3,
  bubble4,
  bubble5,
  bubble6,
  bubble7,
  bubble8,
  bubble9,
  bubble10,
];
export function getRandomBubble() {
  const randomIndex = Math.floor(Math.random() * buble.length);
  return buble[randomIndex];
}
