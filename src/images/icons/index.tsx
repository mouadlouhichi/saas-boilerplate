import Image from "next/image";
import addImage from "@/images/icons/add-image.svg";
import facebookSvg from "@/images/icons/Facebook.svg";
import googleSvg from "@/images/icons/Google.svg";
import helpSvg from "@/images/icons/help.svg";
import homeSvg from "@/images/icons/home.svg";
import logoutSvg from "@/images/icons/logout.svg";
import messageSvg from "@/images/icons/message.svg";
import myAccountSvg from "@/images/icons/my-account.svg";
import twitterSvg from "@/images/icons/Twitter.svg";
import wishlistSvg from "@/images/icons/wishlist.svg";
import type { LucideIcon, LucideProps } from "lucide-react";
import {
  AlarmClock,
  AlertTriangle,
  ArrowDown,
  ArrowUp,
  BarChart3,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  ChevronsUpDown,
  ChevronUp,
  Circle,
  Copy,
  CreditCard,
  Crop,
  DollarSign,
  Download,
  Edit,
  Eye,
  EyeOff,
  FileTerminal,
  Filter,
  Footprints,
  HardHat,
  Image as ImageIcon,
  Laptop,
  Loader2,
  LogOut,
  Menu,
  MessageSquare,
  Minus,
  Moon,
  MoreHorizontal,
  MoreVertical,
  Package,
  Plus,
  PlusCircle,
  RefreshCw,
  Search,
  Send,
  Settings,
  Shirt,
  ShoppingBag,
  ShoppingCart,
  Sliders,
  SlidersHorizontal,
  Star,
  SunMedium,
  Trash,
  Twitter,
  UploadCloud,
  User,
  Volume2,
  VolumeX,
  Wallet,
  X
} from "lucide-react";

export const ImageSvgIcons = {
  FacebookSvg: <Image src={facebookSvg} alt="Facebook" />,
  TwitterSvg: <Image src={twitterSvg} alt="Twitter" />,
  GoogleSvg: <Image src={googleSvg} alt="Google" />,
  MyAccountSvg: <Image src={myAccountSvg} alt="my acount" />,
  LogoutSvg: <Image src={logoutSvg} alt="logout" />,
  MessageSvg: <Image src={messageSvg} alt="messgae" />,
  WishlistSvg: <Image src={wishlistSvg} alt="whishlist" />,
  HelpSvg: <Image src={helpSvg} alt="help" />,
  HomeSvg: <Image src={homeSvg} alt="home" />,
  AddImage: <Image src={addImage} alt="add image" />
};
export type Icons = LucideIcon;

export {
  SunMedium,
  Moon,
  Laptop,
  Star,
  Twitter,
  X,
  Loader2,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  ChevronUp,
  ChevronDown,
  ChevronsUpDown,
  ArrowUp,
  ArrowDown,
  Menu,
  MoreVertical,
  MoreHorizontal,
  Sliders,
  SlidersHorizontal,
  Circle,
  Check,
  Plus,
  PlusCircle,
  Minus,
  Eye,
  EyeOff,
  Trash,
  Edit,
  Crop,
  RefreshCw,
  Send,
  Copy,
  Download,
  AlertTriangle,
  Search,
  Filter,
  AlarmClock,
  CalendarDays,
  User,
  FileTerminal,
  Settings,
  LogOut,
  Volume2,
  VolumeX,
  MessageSquare,
  CreditCard,
  Wallet,
  DollarSign,
  ShoppingCart,
  Package,
  ShoppingBag,
  BarChart3,
  UploadCloud,
  ImageIcon,
  Shirt,
  Footprints,
  HardHat
};

type XTwitterIconProps = {
  className?: string;
  height?: string;
};

export function XTwitterIcon({ className, height = "16" }: XTwitterIconProps) {
  return (
    <svg
      aria-label="X (formerly known as Twitter)"
      fill="currentColor"
      height={height}
      viewBox="0 0 22 20"
      className={className}
    >
      <path d="M16.99 0H20.298L13.071 8.26L21.573 19.5H14.916L9.702 12.683L3.736 19.5H0.426L8.156 10.665L0 0H6.826L11.539 6.231L16.99 0ZM15.829 17.52H17.662L5.83 1.876H3.863L15.829 17.52Z"></path>
    </svg>
  );
}
