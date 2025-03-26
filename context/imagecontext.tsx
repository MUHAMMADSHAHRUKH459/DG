"use client";
import { createContext, useContext, useState, Dispatch, SetStateAction, ReactNode } from "react";

// Define karna padega ki context kis type ka hoga
interface ImageContextType {
  image: string;
  setImage: Dispatch<SetStateAction<string>>;
}

// Default value null rakhne ki bajaye ek object rakhna zaroori hai
const ImageContext = createContext<ImageContextType | undefined>(undefined);

export function ImageProvider({ children }: { children: ReactNode }) {
  const [image, setImage] = useState<string>("");

  return (
    <ImageContext.Provider value={{ image, setImage }}>
      {children}
    </ImageContext.Provider>
  );
}

// Context ko safe tarikay se use karne ke liye custom hook
export function useImage() {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error("useImage must be used within an ImageProvider");
  }
  return context;
}
