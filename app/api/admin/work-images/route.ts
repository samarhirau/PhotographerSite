import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Image from "@/app/models/Image";
import cloudinary from "@/lib/cloudinary";

// GET all work images
export async function GET() {
  await dbConnect();
  const images = await Image.find({ type: "work" });
  return NextResponse.json(images);
}

// POST upload work image
export async function POST(req: Request) {
  await dbConnect();

  const formData = await req.formData();
  const file = formData.get("image") as File;
  const title = (formData.get("title") as string) || "";

  if (!file) return NextResponse.json({ message: "No file uploaded" }, { status: 400 });

  const buffer = Buffer.from(await file.arrayBuffer());

  const streamUpload = () =>
    new Promise<any>((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: "portfolio" },
        (error, result) => {
          if (result) resolve(result);
          else reject(error);
        }
      );
      stream.end(buffer);
    });

  const uploadResult = await streamUpload();

  const newImage = await Image.create({
    url: uploadResult.secure_url,
    title,
    type: "work", // ← important!
  });

  return NextResponse.json(newImage);
}


// DELETE work image by id
export async function DELETE(req: Request) {
  await dbConnect();
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (!id) return NextResponse.json({ message: "ID required" }, { status: 400 });

  await Image.findByIdAndDelete(id);
  return NextResponse.json({ message: "Deleted successfully" });
}
