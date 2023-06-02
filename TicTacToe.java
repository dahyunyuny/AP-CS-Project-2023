import java.util.Scanner;
import java.util.Random;


public class TicTacToe{
    char[][] board;
    int x;
    int y;
    boolean check;
    boolean keepGoing;
    public TicTacToe(){
    	board = new char[3][3]; //gameboard using 2D array
    	check = true;
    	keepGoing = true;
    }
	public void play(){	
	    Scanner scan = new Scanner(System.in);
	    Random random = new Random();
	    
	    for(int i =  0;  i< 3; i++){
            for(int j = 0; j < 3; j++){
              board[i][j] = ' ';	
	      	}
    	}
	    
		while(check){
		    for(int i = 0; i < 3; i++){
				System.out.println("  "+ board[i][0]+"| "+board[i][1]+" | "+board[i][2]);
				if(i != 2){
					System.out.println("---|---|---");
				}
			}
			System.out.println("Your turn: ");
			System.out.println("Please enter the next coordinates");
			System.out.println("The X coordinate: ");
			x = scan.nextInt();
			System.out.println("The Y coordinate: ");
			y = scan.nextInt();
			
			if(board[x][y] != ' '){
				System.out.println("Please enter the valid coordinate");
				continue;
			}
			else{
				board[x][y] = 'X';
			}
			if(checkIfDone() == false){
			    System.out.println("You Win!!");
			    break;
			}
			for(int i = 0; i < 3; i++){
				System.out.println("  "+ board[i][0]+"| "+board[i][1]+" | "+board[i][2]);
				if(i != 2){
					System.out.println("---|---|---");
				}
			}
			
			int X;
			int Y;
			do{
			    X = random.nextInt(3);
			    Y = random.nextInt(3);
			}
			System.out.println("Computer's turn: ");
			System.out.println("Computer placed an 'O' at position (" + X + ", " + Y + ")");

			
			if(board[x][y] != ' '){
				System.out.println("Please enter the valid coordinate");
				continue;
			}
			else{
				board[x][y] = 'O';
			}
			if(checkIfDone() == false){
			    System.out.println("Player 2 Win!!");
			    break;
			}
			if(gameOver() == true){
			    System.out.println("Lame...No one wins...ByeBye");
			}
		} 
    }
    public boolean checkIfDone(){
        //case 1
        if(board[0][0] == 'X' && board[0][1] == 'X' && board[0][2] == 'X'){
            keepGoing = false;
            return keepGoing;
        }
        else if(board[0][0] == 'O' && board[0][1] == 'O' && board[0][2] == 'O'){
            keepGoing = false;
            return keepGoing;
        }
        //case 2
        if(board[1][0] == 'X' && board[1][1] == 'X' && board[1][2] == 'X'){
            keepGoing = false;
            return keepGoing;
        }
        else if(board[1][0] == 'O' && board[1][1] == 'O' && board[1][2] == 'O'){
            keepGoing = false;
            return keepGoing;
        }
        //case 3
        if(board[2][0] == 'X' && board[2][1] == 'X' && board[2][2] == 'X'){
            keepGoing = false;
            return keepGoing;
        }
        else if(board[2][0] == 'O' && board[2][1] == 'O' && board[2][2] == 'O'){
            keepGoing = false;
            return keepGoing;
        }
        //case 4
        if(board[0][0] == 'X' && board[1][0] == 'X' && board[2][0] == 'X'){
            keepGoing = false;
            return keepGoing;
        }
        else if(board[0][0] == 'O' && board[1][0] == 'O' && board[2][0] == 'O'){
            keepGoing = false;
            return keepGoing;
        }
        //case 5
        if(board[0][1] == 'X' && board[1][1] == 'X' && board[2][1] == 'X'){
            keepGoing = false;
            return keepGoing;
        }
        else if(board[0][1] == 'O' && board[1][1] == 'O' && board[2][1] == 'O'){
            keepGoing = false;
            return keepGoing;
        }
        //case 6
        if(board[0][2] == 'X' && board[1][2] == 'X' && board[2][2] == 'X'){
            keepGoing = false;
            return keepGoing;
        }
        else if(board[0][2] == 'O' && board[1][2] == 'O' && board[2][2] == 'O'){
            keepGoing = false;
            return keepGoing;
        }
        //case 7
        if(board[0][0]=='X' && board[1][1] == 'X' && board[2][2] =='X'){
            keepGoing = false;
            return keepGoing;
        }
        else if(board[0][0]=='O' && board[1][1] == 'O' && board[2][2]=='O'){
            keepGoing = false;
            return keepGoing;
        }
        //case 8
        if(board[0][2]=='X' && board[1][1] == 'X' && board[2][0]=='X'){
            keepGoing = false;
            return keepGoing;
        }
        else if(board[0][2]=='O' && board[1][1] == 'O' && board[2][0]=='O'){
            keepGoing = false;
            return keepGoing;
        }
        return true;
    } 
    public boolean gameOver(){
        int count = 0;
        for(int r = 0; r< board.length; r++){
            for(int c = 0; c< board[0].length; c++){
                if(board[r][c]!=' '){
                    count++;
                }   
            }
        }
        if(count == 9){
            return true;
        }
        else{
            return false;
        }
    }
    public void reset(){
        if(gameOver()==true&&keepGoing==false){
            play();
        }
    }
    

    public static void main(String[] args){
        TicTacToe game = new TicTacToe(); // Create an instance of the TicTacToe class
        game.play();
        game.reset();
    }
        
}


