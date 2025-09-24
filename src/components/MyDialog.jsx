import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import Button from './Button';

export default function MyDialog() {
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <Button>Ouvrir Modal</Button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/50" />
                <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded shadow-lg w-80">
                    <Dialog.Title className="text-lg font-bold mb-2">
                        Modal Title
                    </Dialog.Title>
                    <Dialog.Description className="mb-4">
                        Ceci est un exemple de modal avec Radix UI.
                    </Dialog.Description>
                    <Dialog.Close asChild>
                        <Button>Fermer</Button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
