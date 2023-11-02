import Image from 'next/image';
import React from 'react'

export const Mission = () => {
  return (
    <div className=" bg-accent shadow-lg p-6 rounded-md">
      <div className='border-b'>
        <Image
          src="/image/mission-statement.jpg"
          alt=""
          width={400}
          height={300}
          className="rounded w-full"
          objectFit="cover"
        />
      </div>
      <div className="mt-5">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla totam,
          accusamus culpa ab expedita magni dolores minima eligendi sequi
          accusantium dolorum laudantium maiores? Voluptatem magnam fugiat
          cumque delectus autem sed aliquid assumenda quo et magni recusandae
          vero natus tempora dolorem, est dignissimos nulla ad laudantium illo,
          perferendis accusantium. Aliquid, non. Ipsa voluptatum corporis
          numquam quam iusto voluptatem dolorem harum nisi ullam, velit non et
          molestiae blanditiis sequi reprehenderit atque repudiandae nemo.
          Quisquam hic sequi ex consectetur praesentium tempore ab neque
          similique exercitationem rem adipisci, assumenda atque temporibus
          pariatur. Modi quia incidunt commodi harum vero nulla alias quod cum
          facilis eum.
        </p>
      </div>
    </div>
  );
}
