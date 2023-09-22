"use client"
import { Card,CardContent,CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { AspectRatio } from "../ui/aspect-ratio";
import Image from "next/image";
import { Star ,StarHalf} from "lucide-react";
import Link from "next/link";
import ProductImage from "../custom/ProductImage";


export interface ProductCardProps {
  "id": number,
  "title": string,
  "price": number,
  "description": string,
  "image": string,
  "category":string,
  "rating": {
    "rate": number,
    "count":number
  }
}

export default function ProductCard({id,title,price,description,image,rating,category}:ProductCardProps) {
  const {rate,count} = rating
  return (
<Link href={`product/${id}`}>
      <Card className="h-[400px] bg-gray-400 ">
        <CardContent className=" flex flex-col justify-center p-2">
          <p className="text-lg font-bold mb-2 ">{title}</p>
          <div>
            <ProductImage 
            image={image}
             title={title}/>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center max-w-full">
              <p className="capitalize tracking-wider text-muted-foreground font-bold">price:</p>
              <p>$ {price}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="capitalize tracking-wider text-muted-foreground font-bold">rate:</p>
              <p  className="flex items-center">{rate}
              
              {
                rate >= 4? 
                <Star fill="yellow" className="h-5 text-yellow-500"/>:
                <StarHalf fill="yellow" className="h-5 text-yellow-500"/>
              }</p>
            </div>

            <div className="flex justify-between items-center">
              <p className="capitalize tracking-wider text-muted-foreground font-bold">category:</p>
              <p className="capitalize">{category}</p>
            </div>
          </div>
        </CardContent>
      </Card>
</Link>
  );
}
