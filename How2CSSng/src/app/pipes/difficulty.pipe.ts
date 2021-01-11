import { Pipe, PipeTransform } from '@angular/core';
import { Difficulty } from '../models/enums/difficulty';

@Pipe({
  name: 'stringDifficulty'
})
export class DifficultyPipe implements PipeTransform {

  transform(value: Difficulty | undefined): string | undefined{
    if(value)
      return Difficulty[value];
    return undefined;
  }

}
