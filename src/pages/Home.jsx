import React from 'react';
import Button from '../components/Button';
import MyDialog from '../components/MyDialog';
import MyTooltip from '../components/MyTooltip';

export default function Home() {
    return (
        <main className="p-8 flex flex-col gap-6">
            <h2 className="text-3xl font-bold mb-4">Bienvenue sur mon portfolio !</h2>
            <p>Ceci est un exemple de page Home avec Radix UI.</p>

            <div className="flex gap-4">
                <MyDialog />
                <MyTooltip />
            </div>

            <Button onClick={() => alert('Button clicked!')}>Cliquez-moi</Button>
        </main>
    );
}
