import React from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';

export default function MyTooltip() {
    return (
        <Tooltip.Provider>
            <Tooltip.Root>
                <Tooltip.Trigger asChild>
                    <button className="px-4 py-2 bg-green-600 text-white rounded">
                        Hover-moi
                    </button>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                    <Tooltip.Content className="bg-gray-900 text-white text-sm px-2 py-1 rounded shadow-lg">
                        Exemple de Tooltip Radix
                        <Tooltip.Arrow className="fill-gray-900" />
                    </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip.Root>
        </Tooltip.Provider>
    );
}
