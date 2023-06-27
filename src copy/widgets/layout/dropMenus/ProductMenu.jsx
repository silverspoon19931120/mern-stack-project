import MenuBtn from "src/widgets/buttons/MenuBtn";
import OutlineBtn from "src/widgets/buttons/OutlineBtn";
import CustomCard from "src/widgets/cards/CustomCard";
import {
    CloudArrowUpIcon,
    ArrowLongRightIcon,
    ArrowPathIcon,
    BookmarkIcon,
} from "@heroicons/react/24/outline";

export function ProductMenu({ menu = {}, setIsDropMenu = () => { } }) {
    return (
        <div onMouseLeave={() => { setIsDropMenu(false) }} className="grid grid-cols-3 gap-4 container py-8">
            <div>
                {menu?.main?.categories?.map((item, index) => {
                    return <div className="mt-3">
                        <MenuBtn>
                            {item?.name}
                        </MenuBtn>
                    </div>
                })}
            </div>
            <div>
                Integrations
                {
                    menu?.main?.integrations?.map((item, index) => {
                        return <div className="mt-3">
                            <MenuBtn>
                                {item?.name}
                            </MenuBtn>
                        </div>
                    })
                }
            </div>
            <div>
                <CustomCard />
            </div>
        </div>
    );
}

export default ProductMenu;
