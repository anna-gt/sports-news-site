import roundedVkIcon from "../../../assets/icons/rounded-icons/vk.svg";
import roundedFacebookIcon from "../../../assets/icons/rounded-icons/facebook.svg";
import roundedInstaIcon from "../../../assets/icons/rounded-icons/instagram.svg";
import roundedYoutubeIcon from "../../../assets/icons/rounded-icons/youtube.svg";
import roundedTelegramIcon from "../../../assets/icons/rounded-icons/telegram.svg";
import roundedTiktokIcon from "../../../assets/icons/rounded-icons/tiktok.svg";
import roundedTwitterIcon from "../../../assets/icons/rounded-icons/twitter.svg";
import vkIcon from "../../../assets/icons/vk.svg";
import facebookIcon from "../../../assets/icons/facebook.svg";
import instaIcon from "../../../assets/icons/instagram.svg";
import youtubeIcon from "../../../assets/icons/youtube.svg";
import telegramIcon from "../../../assets/icons/telegram.svg";
import tiktokIcon from "../../../assets/icons/tiktok.svg";
import twitterIcon from "../../../assets/icons/twitter.svg";
import type { BaseComponentProps } from "../../../types";
import styles from './SocialIcons.module.scss'

const roundeSocialNetworks = [
  { name: "vk-icon", icon: roundedVkIcon },
  { name: "faceook-icon", icon: roundedFacebookIcon },
  { name: "instagram-icon", icon: roundedInstaIcon },
  { name: "youtube-icon", icon: roundedYoutubeIcon },
  { name: "telegram-icon", icon: roundedTelegramIcon },
  { name: "tiktok-icon", icon: roundedTiktokIcon },
  { name: "twitter-icon", icon: roundedTwitterIcon },
];

const socialIcons = [
  { name: "vk-icon", icon: vkIcon },
  { name: "faceook-icon", icon: facebookIcon },
  { name: "instagram-icon", icon: instaIcon },
  { name: "youtube-icon", icon: youtubeIcon },
  { name: "telegram-icon", icon: telegramIcon },
  { name: "tiktok-icon", icon: tiktokIcon },
  { name: "twitter-icon", icon: twitterIcon },
];

interface SocialIconsProps extends BaseComponentProps {
  variant?: "rounded" | "default";
}

const SocialIcons: React.FC<SocialIconsProps> = ({
  variant = "rounded",
  className,
}) => {
  const icons = variant === "rounded" ? roundeSocialNetworks : socialIcons;

  return (
    <div className={className}>
      {icons.map((social) => (
        <img
          key={social.name}
          src={social.icon}
          alt={social.name}
          aria-label={social.name}
          className={styles.icon}
        />
      ))}
    </div>
  );
};

export default SocialIcons;
