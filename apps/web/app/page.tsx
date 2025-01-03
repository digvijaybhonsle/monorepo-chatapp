'use client';

import { TextInput } from "@repo/ui/text-input";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter(); 

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        width: '100vw',
        background: 'black',
        justifyContent: 'center',
        alignItems: 'center', // Use alignItems instead of justifyItems
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center', // Add this to center child elements vertically
        }}
      >
        <h1
          style={{
            color: 'white',
          }}
        >
          Hello!!
        </h1>
        <TextInput size="big" placeholder="Enter something..." />
        <button
          onClick={() => {
            router.push("/chat/123"); 
          }}
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            cursor: 'pointer',
          }}
        >
          Join Room
        </button>
      </div>
    </div>
  );
}
