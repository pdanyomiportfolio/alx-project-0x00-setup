// pages/landing.tsx
import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-extralight mb-4">Landing Page</h1>
      <Card />

      <div className="mt-6 flex flex-wrap gap-4">
        {/* Small Buttons */}
        <Button title="Small - Rounded-sm" styles="text-sm rounded-sm" />
        <Button title="Small - Rounded-md" styles="text-sm rounded-md" />
        <Button title="Small - Rounded-full" styles="text-sm rounded-full" />

        {/* Medium Buttons */}
        <Button title="Medium - Rounded-sm" styles="text-base rounded-sm" />
        <Button title="Medium - Rounded-md" styles="text-base rounded-md" />
        <Button title="Medium - Rounded-full" styles="text-base rounded-full" />

        {/* Large Buttons */}
        <Button
          title="Large - Rounded-sm"
          styles="text-lg rounded-sm px-6 py-3"
        />
        <Button
          title="Large - Rounded-md"
          styles="text-lg rounded-md px-6 py-3"
        />
        <Button
          title="Large - Rounded-full"
          styles="text-lg rounded-full px-6 py-3"
        />
      </div>
    </div>
  );
};

export default Landing;
