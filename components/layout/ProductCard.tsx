import { Card,CardContent,CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { AspectRatio } from "../ui/aspect-ratio";
import Image from "next/image";
import { Star ,StarHalf} from "lucide-react";
import Link from "next/link";

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
      <Card className="w-[95%] bg-muted md:w-[350px] shadow-lg">
        <CardContent>
          <div className="w-full py-2 bg-muted">
            <AspectRatio ratio={16/9}>
              <Image src={image} 
              className="object-fit rounded-lg " 
              fill 
              alt={title}/>
            </AspectRatio>
          </div>
          <div className="flex flex-col gap-2">
            <p>{title}</p>
            <div className="flex justify-between items-center">
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
        <CardFooter> 
        </CardFooter>
      </Card>
</Link>
  );
}
