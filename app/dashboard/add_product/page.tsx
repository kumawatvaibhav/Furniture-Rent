"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Textarea } from "@nextui-org/input";
import { useDropzone } from "react-dropzone";

function AddFurniture() {
  const [furnitureDetails, setFurnitureDetails] = useState({
    name: "",
    category: "",
    price: "",
    description: ""
  });

  const [image, setImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFurnitureDetails({ ...furnitureDetails, [e.target.id]: e.target.value });
  };

  const handleDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    setImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  const submitFurniture = async () => {
    setLoading(true);
    setErrorMessage("");
  
    const formData = new FormData();
    formData.append("name", furnitureDetails.name);
    formData.append("category", furnitureDetails.category);
    formData.append("price", furnitureDetails.price);
    formData.append("description", furnitureDetails.description);
    if (image) {
      formData.append("image", image); // Ensure you're appending the image
    }
  
    try {
      await axios.post("/api/furniture/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Furniture added successfully!");
      router.push("/catalog");
    } catch (error) {
      console.error("Error adding furniture:", error);
      setErrorMessage("Failed to add furniture. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
    accept: { "image/*": [] },
    multiple: false,
  });

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-xl">
        <Card className="mx-auto bg-white shadow-lg rounded-lg">
          <CardHeader className="p-6 bg-red-400 text-white rounded-t-lg">
            <CardTitle className="text-xl font-bold">Add New Furniture</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            {errorMessage && <div className="text-red-500 text-center">{errorMessage}</div>}

            {/* Furniture Name */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-700">Furniture Name</Label>
              <Input
                id="name"
                placeholder="Enter furniture name"
                value={furnitureDetails.name}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-lg"
              />
            </div>

            {/* Category */}
            <div className="space-y-2">
              <Label htmlFor="category" className="text-gray-700">Category</Label>
              <Input
                id="category"
                placeholder="Enter category"
                value={furnitureDetails.category}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-lg"
              />
            </div>

            {/* Price */}
            <div className="space-y-2">
              <Label htmlFor="price" className="text-gray-700">Price</Label>
              <Input
                id="price"
                placeholder="Enter price"
                type="number"
                value={furnitureDetails.price}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-lg"
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description" className="text-gray-700">Description</Label>
              <Textarea
                id="description"
                placeholder="Enter a brief description"
                value={furnitureDetails.description}
                onChange={handleInputChange}
                className="container border border-gray-300 rounded-lg"
              />
            </div>

            {/* Image Upload */}
            <div className="space-y-2">
              <Label className="text-gray-700">Furniture Image</Label>
              <div
                {...getRootProps()}
                className={`p-6 border-2 border-dashed rounded-lg cursor-pointer text-center ${isDragActive ? "border-green-500 bg-green-50" : "border-gray-400 bg-gray-50"}`}
              >
                <input {...getInputProps()} />
                {isDragActive ? (
                  <p className="text-green-700">Drop the image here...</p>
                ) : (
                  <p>Drag & drop an image here, or click to select one</p>
                )}
              </div>
              {previewImage && (
                <div className="mt-4 flex justify-center">
                  <img
                    src={previewImage}
                    alt="Furniture Preview"
                    className="w-48 h-48 object-cover rounded-lg shadow-md"
                  />
                </div>
              )}
            </div>

            {/* Submit Button */}
            <Button
              onClick={submitFurniture}
              className="w-full bg-red-400 text-white font-semibold py-3 rounded-lg"
              disabled={loading}
            >
              {loading ? "Adding..." : "Add Furniture"}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default AddFurniture;
