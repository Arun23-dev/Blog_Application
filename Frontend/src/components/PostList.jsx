import { Link } from 'react-router'
import { Image } from '@imagekit/react'

function PostList() {
  return (
    <div className="flex flex-col gap-12 mb-8">

      {/* Post 1 */}
      <div className="flex flex-col lg:flex-row gap-5 mt-5">
        {/* Image */}
        <div className="w-full lg:w-1/3 flex justify-center">
          <Image
            src="./logo.png"
            className="w-full object-cover rounded-2xl"
            alt="Post Image"
          />
        </div>

        {/* Details */}
        <div className="w-full lg:w-2/3 flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad praesentium nihil aliquid quas amet! Expedita similique iusto eveniet saepe veritatis!
          </h1>

          <div className="flex flex-row gap-4 items-center text-gray-500 text-sm">
            <span>Written by John Doe on Webdesign</span>
            <span>2 Days ago</span>
          </div>

          <p className="mt-3 text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab quod qui maxime, inventore iusto praesentium fugit aliquam excepturi labore sunt eius voluptate adipisci dolore iste possimus officia vero. Delectus nobis velit dolorem dolorum? Nesciunt, excepturi, nihil ex modi eum fugit mollitia molestias, tenetur sequi magni officiis amet consequuntur ad veniam.
          </p>

          <Link to="/hero" className="underline mt-4 text-blue-500">
            Read More
          </Link>
        </div>
      </div>

      {/* Post 2 */}
      <div className="flex flex-col xl:flex-row gap-8">
        {/* Image */}
        <div className="md:hidden xl:block xl:w-1/3 flex justify-center">
          <Image
            src="./logo.png"
            className="rounded-2xl object-cover"
            width={735}
            alt="Post Image"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col gap-4 xl:w-2/3">
          <Link to="/hero" className="text-4xl font-semibold">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad praesentium nihil aliquid quas amet! Expedita similique iusto eveniet saepe veritatis
          </Link>

          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by John Doe on Webdesign</span>
            <span>2 Days ago</span>
          </div>

          <p className="mt-3 text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab quod qui maxime, inventore iusto praesentium fugit aliquam excepturi labore sunt eius voluptate adipisci dolore iste possimus officia vero. Delectus nobis velit dolorem dolorum? Nesciunt, excepturi, nihil ex modi eum fugit mollitia molestias, tenetur sequi magni officiis amet consequuntur ad veniam.
          </p>

          <Link to="/hero" className="underline mt-4 text-blue-500">
            Read More
          </Link>
        </div>
      </div>

    </div>
  )
}

export default PostList
