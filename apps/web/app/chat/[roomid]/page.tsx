import { TextInput } from "@repo/ui/text-input";

export default function ChatRoom() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        padding: "20px", // Add some padding for better spacing
        backgroundColor: "#f9f9f9", // Set a background color for better contrast
      }}
    >
      <div style={{ fontSize: "24px", fontWeight: "bold", textAlign: "center" }}>
        Chat Room
      </div>
      <div style={{ marginTop: "auto", display: "flex", justifyContent: "center" }}>
        <TextInput
          size="big"
          placeholder="Chat here"
          aria-label="Enter your message here" 
        />
      </div>
    </div>
  );
}
