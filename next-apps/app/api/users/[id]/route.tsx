import { error } from "console";
import { NextRequest, NextResponse } from "next/server";
import Schema from "../../schema";



export function GET(request: NextRequest, { params }: { params: { id: number } }) {
  const { id } = params;

  if (id > 10) {
    return NextResponse.json({ message: 'not found id' });
  } else {
    return NextResponse.json({ id: 1, name: 'abdullah' });
  }
}



// creating an objcet

 export async function POST(request:NextRequest,) {
    const body = await request.json();
    if(!body.name)
        return NextResponse.json({error: 'name iss reqired'},{status:404})
    return NextResponse.json({id:1,name: 'abdullah'} ,{status:200})
    
 }

//updating the object

 export async function PUT(request: NextRequest, { params }: { params: { id: number } }) {
   const { id } = params;
 
   try {
     const body = await request.json();

     const validation = Schema.safeParse({body})
 
     if (!validation.success) {
       return NextResponse.json( validation.error.errors, { status: 400 });
     }
 

     return NextResponse.json({ id: id, name: body.name }, { status: 200 });
   } catch (error) {
     return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
   }
 }


 // deleting the object

 export function DELETE (request: NextRequest, { params }: { params: { id: number } }){
  if (params.id) {
    return NextResponse.json({ error: 'user not foundd' }, { status: 400 });


    return NextResponse.json({ }); 
    
  }



 }