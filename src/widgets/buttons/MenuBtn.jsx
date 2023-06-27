import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { Button } from "@material-tailwind/react";


export function MenuBtn({ children = <></> }) {
    return (
        <Button color="gray" className="rounded-full bg-white w-full flex items-center justify-between" variant="outlined" >
            {children}
            <ChevronRightIcon className="w-4 h-4" />
        </Button>
    );
}

export default MenuBtn;
