import wolfIcon from './awolk_icon.png';

interface WolfIconPropsInterface {
  iconSize?: number;
}
export const WolfIcon = ({ iconSize = 50 }: WolfIconPropsInterface) => {
  return (
    <img
      src={wolfIcon}
      alt="Wolf Icon"
      style={{
        width: `${iconSize}px`, // Adjust width as needed
        height: `${iconSize}px`, // Adjust height as needed
        borderRadius: '50%', // This makes the image round
        objectFit: 'cover', // Ensures the image covers the area without being stretched
      }}
    />
  );
};
