import { User } from '@/pages/UsersPage'
import {createContext} from 'react'
export const QueryContext = createContext(new Map<string,User[]>())
