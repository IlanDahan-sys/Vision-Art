import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function VisionApp() {
  const [visionText, setVisionText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    if (!visionText) return;
    setLoading(true);

    // דמו בלבד – תמונה קבועה לצורך הדגמה
    setTimeout(() => {
      setImageUrl("https://images.unsplash.com/photo-1506744038136-46273834b3fb");
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <img
        src="/logo.png"
        alt="Vision Art Logo"
        className="w-32 mb-6"
      />
      <h1 className="text-3xl font-bold mb-4 text-center">מה החזון שלך?</h1>
      <Input
        value={visionText}
        onChange={(e) => setVisionText(e.target.value)}
        placeholder="כתוב כאן את החזון שלך..."
        className="w-full max-w-md mb-4"
      />
      <Button onClick={generateImage} disabled={loading} className="mb-6">
        {loading ? "יוצר תמונה..." : "צור תמונה"}
      </Button>
      {imageUrl && (
        <img
          src={imageUrl}
          alt="תמונת חזון"
          className="rounded-xl shadow-xl max-w-full h-auto"
        />
      )}
    </div>
  );
}