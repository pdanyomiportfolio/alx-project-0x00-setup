import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <Card />

      <div className="mt-6 flex flex-col gap-4">
        {/* Small buttons */}
        <Button
          title="Small - Rounded SM"
          styles="px-2 py-1 text-sm rounded-sm bg-blue-500 text-white"
        />
        <Button
          title="Small - Rounded MD"
          styles="px-2 py-1 text-sm rounded-md bg-blue-500 text-white"
        />
        <Button
          title="Small - Rounded FULL"
          styles="px-2 py-1 text-sm rounded-full bg-blue-500 text-white"
        />

        {/* Medium buttons */}
        <Button
          title="Medium - Rounded SM"
          styles="px-4 py-2 text-base rounded-sm bg-green-500 text-white"
        />
        <Button
          title="Medium - Rounded MD"
          styles="px-4 py-2 text-base rounded-md bg-green-500 text-white"
        />
        <Button
          title="Medium - Rounded FULL"
          styles="px-4 py-2 text-base rounded-full bg-green-500 text-white"
        />

        {/* Large buttons */}
        <Button
          title="Large - Rounded SM"
          styles="px-6 py-3 text-lg rounded-sm bg-red-500 text-white"
        />
        <Button
          title="Large - Rounded MD"
          styles="px-6 py-3 text-lg rounded-md bg-red-500 text-white"
        />
        <Button
          title="Large - Rounded FULL"
          styles="px-6 py-3 text-lg rounded-full bg-red-500 text-white"
        />
      </div>
    </div>
  );
};

export default Landing;
