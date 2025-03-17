import { User } from '@/types/types'
import {createContext} from 'react'
export const QueryContext = createContext(new Map<string,User[]>())
