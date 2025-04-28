import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { empresasId: string } }
) {
  try {
    const { userId } = auth();
    const { empresasId } = params;
    const values = await req.json();

    if (!userId) return new NextResponse("unauthorized", { status: 401 });

    const company = await db.company.update({
      where: {
        id: empresasId,
        userId,
      },
      data: {
        ...values,
      },
    });

    return NextResponse.json(company);
  } catch (error) {
    console.log("[COMPANY ID]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { empresasId: string } }
) {
  try {
    const { userId } = auth();
    const { empresasId } = params;

    if (!userId) return new NextResponse("Unauthorized", { status: 401 });

    const deleteCompany = await db.company.delete({
      where: {
        id: empresasId,
      },
    });

    return NextResponse.json(deleteCompany);
  } catch (error) {
    console.log("[DELETE COMPANY ID]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
