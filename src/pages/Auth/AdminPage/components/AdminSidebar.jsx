import React, { useState } from 'react';
import ButtonCard from '../../../../components/ButtonCard';

import {
    LayoutDashboard,
    Settings,
    Clipboard,
    Syringe,
    Mail,
    CreditCard,
    CalendarRange,
    AlignJustify,
    HelpCircle,
} from 'lucide-react';

const DATA_DEFAULT = [
    {
        id: 1,
        name: 'Dashboard',
        icon: LayoutDashboard,
    },
    {
        id: 2,
        name: 'Lab Test',
        icon: Clipboard,
    },
    {
        id: 3,
        name: 'Appointment',
        icon: CalendarRange,
    },
    {
        id: 4,
        name: 'Medicine Order',
        icon: Syringe,
    },
    {
        id: 5,
        name: 'Message',
        icon: Mail,
    },
    {
        id: 6,
        name: 'Payment',
        icon: CreditCard,
    },
    {
        id: 7,
        name: 'Settings',
        icon: Settings,
    },
];

const AdminMenuItem = () => {
    const [sidebar, setSidebar] = useState(false);
    return (
        <div className="flex flex-col min-h-full px-7 pt-14">
            <div className="flex gap-8 items-center justify-between">
                <span className="text-[#013CC6] font-Poppins text-2xl font-medium leading-normal">
                    Sales.
                </span>
                <AlignJustify
                    className="cursor-pointer hover:opacity-70"
                    color="#013CC6"
                    onClick={() => setSidebar(!sidebar)}
                />
            </div>
            {!sidebar ? (
                <div className="flex flex-col mt-16 justify-between h-full">
                    <div className="flex flex-col gap-10 px-4">
                        {DATA_DEFAULT.map(itemp => (
                            <ButtonCard
                                key={itemp.id}
                                Icon={itemp.icon}
                                classButton={
                                    'gap-4 justify-between border-none min-w-12 opacity-70 '
                                }
                                ClassIcon={'hover:text-[#013CC6]'}
                                color={'black'}
                            />
                        ))}
                    </div>
                    <ButtonCard
                        Icon={HelpCircle}
                        name={'help'}
                        size={24}
                        color={'#131313'}
                        classButton={'border-none gap-4'}
                        ClassSpan={'text-[#131313] '}
                    />
                </div>
            ) : (
                <div className="flex flex-col mt-16 justify-between h-full">
                    <div className="flex flex-col gap-10 px-4">
                        {DATA_DEFAULT.map(item => (
                            <ButtonCard
                                key={item.id}
                                Icon={item.icon}
                                name={item.name}
                                classButton={
                                    'gap-4 justify-between border-none min-w-12 opacity-70 '
                                }
                                ClassIcon={'hover:text-[#013CC6]'}
                                color={'black'}
                                ClassSpan={
                                    'text-black font-Poppins text-base font-normal leading-normal tracking-wide hover:text-[#013CC6] whitespace-nowrap'
                                }
                            />
                        ))}
                    </div>
                    <ButtonCard
                        Icon={HelpCircle}
                        name={'help'}
                        size={24}
                        color={'#131313'}
                        classButton={'border-none gap-4'}
                        ClassSpan={'text-[#131313] '}
                    />
                </div>
            )}
        </div>
    );
};

export default AdminMenuItem;
