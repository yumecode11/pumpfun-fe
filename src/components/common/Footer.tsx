"use client";

import { FC, useState } from "react";
import { Button } from "../primitives/Button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./Dialog";

const Footer: FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col-reverse gap-8 py-8 flex-wrap justify-between w-full p-2 items-start h-fit bg-muted p-4 text-muted-foreground">
      <p className="w-full text-sm text-center">
        &copy; loremipsum {new Date().getFullYear()}
      </p>
      <div className="flex items-center justify-around w-full">
        <div>
          <button type="button" className="text-sm text-white hover:underline" onClick={() => setOpen(true)}>[how it works]</button>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>How it works</DialogTitle>
              </DialogHeader>
              <div>
                <p className="text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas purus diam, euismod et maximus id, bibendum sit amet ex. Nam ut placerat justo, non tincidunt arcu. Nullam euismod venenatis commodo.</p>
                <ol className="text-sm ml-6 list-decimal list-outside">
                  <li>Cras sagittis, est non facilisis semper, velit sapien tristique nisl, vel auctor purus lacus eget enim.</li>
                  <li>Vivamus bibendum elit magna, ac feugiat nisl malesuada quis.</li>
                  <li>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</li>
                  <li>Nulla at nulla tellus. Aliquam tempor leo sed tortor posuere pretium.</li>
                  <li>Donec euismod, nisl eu malesuada ultricies, augue turpis volutpat massa, vel dictum arcu neque et odio.</li>
                </ol>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setOpen(false)}>Close</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        
        <a
          className="text-sm text-white hover:underline"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          [twitter]
        </a>
        <a
          className="text-sm text-white hover:underline"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          [telegram]
        </a>
        <a
          className="text-sm text-white hover:underline"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          [support]
        </a>
      </div>
    </div>
  );
};

export default Footer;
