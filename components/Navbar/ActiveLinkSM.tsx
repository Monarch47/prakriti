import { useRouter } from "next/router";

type ActiveLinkProps = {
  children: React.ReactNode;
  href: string;
};

const ActiveLink = ({ children, href }: ActiveLinkProps) => {
  const router = useRouter();

  (function prefetchPages() {
    if (typeof window !== "undefined") {
      router.prefetch(router.pathname);
    }
  })();

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`${
        router.asPath === href
          ? `text-light-green font-semibold bg-white/70 rounded-lg`
          : `text-[#2c2c2c] font-normal`
      } py-4 px-8`}
    >
      {children}
    </a>
  );
};
export default ActiveLink;
