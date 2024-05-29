import { HttpStatusCode } from "axios";
import connectDB from "@/lib/connectDB";

import { NextResponse } from "next/server";
import Editeur from "@/app/models/Editeur";

export async function GET() {
  try {
  const editeurs = await Editeur.find({}, null, {sort: {'_id': -1}});
  return NextResponse.json(editeurs );
  } catch (error) {
  return NextResponse.json({ error });
  }
}
export async function POST(req) {
try {
const body = await req.json();
const newEditeur = new Editeur(body)
const editeur = await newEditeur.save();
return NextResponse.json(
{ editeur, message: 'Your editor has been created' },
{ status: HttpStatusCode.Created },
);
} catch (error) {
return NextResponse.json({ message: error }, { status:
HttpStatusCode.BadRequest });
}
}
