import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: { eventoId: string } }
) {
  try {
    const { userId } = auth();

    if (!userId) return new NextResponse("Unauthorized", { status: 401 });

    const deletedEvent = await db.event.delete({
      where: {
        id: params.eventoId,
      },
    });

    return NextResponse.json(deletedEvent);
  } catch (error) {
    console.log("DELETE_EVENT", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
