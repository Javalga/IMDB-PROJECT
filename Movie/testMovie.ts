import {Movie} from "../Movie/Movie"
import { Professional } from "../Professional/Professional"

var jose = new Professional("jose", 34, 1, 2, true, "americana", 7, "actor");
var carlos = new Professional("carlos", 32, 4, 1, false, "colombiana", 1, "actor");
var maria = new Professional("maria", 28, 2, 2, true, "venezolana", 0, "actor");
var juan = new Professional("juan", 41, 1, 3, true, "Español", 4, "actor");

var batman = new Movie("batman", 2010, [jose, carlos], "americana", "accion", jose, "producciones", maria, "ingles", "netflix", false, "sony", "nick");
var cat = new Movie("cat", 2010, [maria, juan], "europea", "drama", carlos, "producciones", juan, "español", "HBO", false, "paramount", "nick");