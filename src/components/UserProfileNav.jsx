"use client"
import { Button } from '@heroui/react';
import React from 'react';
import { ArrowRightFromSquare, Gear, Persons } from "@gravity-ui/icons";
import { Avatar, Dropdown, Label } from "@heroui/react";
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';

const UserProfileNav = () => {

    const { data: session, isPending } = authClient.useSession()

    return (
        <div>
            {isPending ? "Loading..." :
                session ?
                    <ul className='flex gap-3 items-center'>
                        <h2>{session?.user?.name}</h2>
                        <Dropdown>
                            <Dropdown.Trigger className="rounded-full">
                                <Avatar>
                                    <Avatar.Image
                                        src={session?.user?.image}
                                        alt='user profile'
                                    />
                                    <Avatar.Fallback delayMs={600}>N/A</Avatar.Fallback>
                                </Avatar>
                            </Dropdown.Trigger>
                            <Dropdown.Popover>
                                <div className="px-3 pt-3 pb-1">
                                    <div className="flex items-center gap-2">
                                        <Avatar size="sm">
                                            <Avatar.Image
                                                src={session?.user?.image}
                                                alt='user profile'
                                            />
                                            <Avatar.Fallback delayMs={600}>{session?.user?.name}</Avatar.Fallback>
                                        </Avatar>
                                        <div className="flex flex-col gap-0">
                                            <p className="text-sm leading-5 font-medium">{session?.user?.name}</p>
                                            <p className="text-xs leading-none text-muted">{session?.user?.email}</p>
                                        </div>
                                    </div>
                                </div>
                                <Dropdown.Menu>
                                    <Dropdown.Item id="dashboard" textValue="Dashboard">
                                        <Label>Dashboard</Label>
                                    </Dropdown.Item>
                                    <Dropdown.Item id="profile" textValue="Profile">
                                        <Label>Profile</Label>
                                    </Dropdown.Item>

                                    <Dropdown.Item id="new-project" textValue="New project">
                                        <div className="flex w-full items-center justify-between gap-2">
                                            <Link href={'/add-destination'}><Label>Add destination</Label></Link>
                                            <Persons className="size-3.5 text-muted" />
                                        </div>
                                    </Dropdown.Item>
                                    <Dropdown.Item id="logout" textValue="Logout" onClick={async () => await authClient.signOut()} variant="danger">
                                        <div className="flex w-full items-center justify-between gap-2">
                                            <Label>Logout</Label>
                                            <ArrowRightFromSquare className="size-3.5 text-danger" />
                                        </div>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown.Popover>
                        </Dropdown>

                        <Button onClick={async () => await authClient.signOut()} type="submit" variant='danger'>Logout</Button>

                    </ul>
                    :
                    <ul className='flex gap-3 items-center'>
                        <li><Link href={'/auth/login'}>Login</Link></li>
                        <li><Link href={'/auth/register'}>Sign Up</Link></li>
                    </ul>
            }


        </div>
    );
};

export default UserProfileNav;