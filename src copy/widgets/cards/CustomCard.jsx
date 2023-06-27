import PropTypes from "prop-types";
import {
  Card,
  CardBody,
  Typography,
  IconButton,
} from "@material-tailwind/react";

export function CustomCard({ color, icon, title, description }) {
  return (
    <Card className="rounded-2xl shadow-lg shadow-gray-500/10">
      <CardBody className="px-8 text-center">
        <Typography className="font-normal text-blue-gray-600">
          {description}
        </Typography>
      </CardBody>
    </Card>
  );
}

CustomCard.defaultProps = {
  color: "blue",
};

CustomCard.propTypes = {
  color: PropTypes.oneOf([
    "blue-gray",
    "gray",
    "brown",
    "deep-orange",
    "orange",
    "amber",
    "yellow",
    "lime",
    "light-green",
    "green",
    "teal",
    "cyan",
    "light-blue",
    "blue",
    "indigo",
    "deep-purple",
    "purple",
    "pink",
    "red",
  ]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
};

CustomCard.displayName = "/src/widgets/layout/feature-card.jsx";

export default CustomCard;
