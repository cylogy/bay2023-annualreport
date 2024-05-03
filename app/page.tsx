import Image from 'next/image';
import Typography from './components/Typography';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex w-full flex-col md:flex-row">
        <div className="bg-blue flex h-[384px] items-center justify-center px-9">
          <Typography as="h1" className="font-h6-desktop uppercase text-white">
            Protecting
          </Typography>
        </div>
        <div className="bg-dark-blue flex h-[384px] items-center justify-center whitespace-nowrap px-9 md:order-3">
          <Typography as="h1" className="font-h6-desktop uppercase text-white">
            Our Air,
          </Typography>
        </div>
        <div className="bg-dark-blue relative flex h-[384px] w-full items-center justify-center px-9 md:order-2">
          <Image
            src="/img/image-square-1.png"
            className="hidden h-96 flex-1 flex-grow object-cover object-center md:flex"
            fill
            alt="sky"
          />
          <Image
            src="/img/image-square-4-2x.png"
            className="flex h-96 flex-1 flex-grow object-cover object-center md:hidden"
            fill
            alt="sky"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row"></div>
    </main>
  );
}
