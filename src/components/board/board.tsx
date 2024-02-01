import {useEffect, useRef, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { moveDown, moveLeft, moveRight, moveUp } from "@/components/actions/boardActions";
import {cloneDeep} from "lodash";

export enum Direction {
    UP='UP',
    DOWN='DOWN',
    RIGHT='RIGHT',
    LEFT='LEFT',
}

const arrayColumn = (arr:number[][], i:number) => arr.map(x => x[i]);

function arraysEqual(arr1: number[][], arr2: number[][]): boolean {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1[i].length; j++) {
            if (arr1[i][j] !== arr2[i][j]) {
                return false;
            }
        }
    }
    return true;
}

export const moveVertical = (direction:Direction,arr:number[][],score:number) => {
    const cloneArr = cloneDeep(arr)
    for(let i=0;i<cloneArr.length;i++){
        const column = arrayColumn(cloneArr, i);
        const arrWithoutZeros = direction===Direction.UP
            ? column.filter(item => item !==0 )
            : column.filter(item => item !==0 ).reverse()
        let shiftedColumn = []
        for(let j=0;j<arrWithoutZeros.length;j++) {
            if(arrWithoutZeros[j] === arrWithoutZeros[j+1]){
                shiftedColumn.push(arrWithoutZeros[j]*2)
                score+=arrWithoutZeros[j]*2
                j++
            } else{
                shiftedColumn.push(arrWithoutZeros[j])
            }
        }
        shiftedColumn = direction===Direction.UP
            ? shiftedColumn.concat(Array(4-shiftedColumn.length).fill(0))
            : shiftedColumn.concat(Array(4-shiftedColumn.length).fill(0)).reverse()
        for (let k = 0; k < cloneArr.length; k++) {
            cloneArr[k][i] = shiftedColumn[k]
        }
    }
    return  {
        arr: arraysEqual(cloneArr,arr) ? cloneArr : setRandomValue(cloneArr),
        score: score
    }
}

export const moveHorizontal = (direction:Direction,arr:number[][],score:number) => {
    const cloneArr = cloneDeep(arr)
    for(let i=0;i<cloneArr.length;i++){
        const arrWithoutZeros = direction===Direction.LEFT
            ? cloneArr[i].filter(item => item !==0 )
            : cloneArr[i].filter(item => item !==0 ).reverse()
        const shiftedArr = []
        for(let j=0;j<arrWithoutZeros.length;j++) {
            if(arrWithoutZeros[j] === arrWithoutZeros[j+1]){
                shiftedArr.push(arrWithoutZeros[j]*2)
                score+=arrWithoutZeros[j]*2
                j++
            } else{
                shiftedArr.push(arrWithoutZeros[j])
            }
        }
        cloneArr[i] = direction===Direction.LEFT
            ? shiftedArr.concat(Array(4-shiftedArr.length).fill(0))
            : shiftedArr.concat(Array(4-shiftedArr.length).fill(0)).reverse()
    }
    return  {
        arr:arraysEqual(cloneArr,arr) ? cloneArr : setRandomValue(cloneArr),
        score:score
    }
}

function findEmptyCells(arr:number[][]) {
    var emptyCells = [];
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === 0) {
                emptyCells.push([i, j]);
            }
        }
    }
    return emptyCells;
}

export function setRandomValue(arr:number[][]) {
    var emptyCells = findEmptyCells(arr);
    if (emptyCells.length > 0) {
        var randomIndex = Math.floor(Math.random() * emptyCells.length);
        var randomCell = emptyCells[randomIndex];
        arr[randomCell[0]][randomCell[1]] = 2;
        return arr;
    }
    return arr;
}

export const initBoard = () => {
    const arr:number[][] = []
    for(let i=0;i<4;i++){
        arr[i]=[]
        for(let j=0;j<4;j++){
            arr[i][j]=0
        }
    }

    return setRandomValue(arr)
}

export const Board = () => {
    const dispatch = useDispatch();
    const arr: number[][] = useSelector(state => state.arr);

    useEffect(()=> {
        const handleKeyDown = (event) => {
            switch (event.key){
                case 'ArrowUp':
                    dispatch(moveUp());
                    break
                case 'ArrowDown':
                    dispatch(moveDown());
                    break
                case 'ArrowLeft':
                    dispatch(moveLeft())
                    break
                case 'ArrowRight':
                    dispatch(moveRight())
                    break
                default:
                    break
            }
        }

        document.addEventListener('keydown',handleKeyDown)
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [dispatch]);

    return (
        <div className="p-3 board-background rounded-lg">
            <div className="grid grid-cols-4 gap-3 board-background">
                {arr.map((row, i) => (
                    row.map((cell, j) => (
                        <div key={j} className={`box-content ${cell !== 0 ? `cell-${cell}` : 'cell-default'} h-16 w-16 p-4 rounded-lg flex justify-center items-center `}>
                            <p key={j} className={`${cell > 512 ? 'text-4xl' : 'text-5xl'} text-center font-extrabold`}>{cell !== 0 ? cell : ''}</p>
                        </div>
                    ))
                ))}
            </div>
        </div>
    )
}
