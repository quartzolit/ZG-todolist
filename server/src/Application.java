import java.util.Comparator;
import java.util.LinkedList;
import java.util.List;
import java.util.Scanner;

public class Application {
    public static void main(String[] args) {

        List<ToDoCRD> toDoList = new LinkedList<>();
        boolean loop = true;

        Scanner responses = new Scanner(System.in);
        String answers;

        System.out.println("Welcome to ZG To Do List");

        while (loop){
            System.out.println("[1] Create a New Task ");
            System.out.println("[2] List all Tasks ");
            System.out.println("[3] Delete single Task ");
            System.out.println("[4] Exit ");
            System.out.println("");
            System.out.println("Select your option[1-4] ");
            answers = responses.nextLine();

            switch (answers){
                case "1":
                    createTask(toDoList);
                    break;
                case "2":
                    showList(toDoList);
                    break;
                case "3":
                    deleteTask(toDoList);
                    break;
                case "4":
                    loop = false;
                    break;
            }
        }



    }

    public static void showList(List<ToDoCRD> list){
        int count = 0;

        for (ToDoCRD td: list) {
            System.out.println("ID - " + count + " " + td.toString());
            count++;
        }
        System.out.println("");
    }

    public static void deleteTask(List<ToDoCRD> list){
        Scanner values = new Scanner(System.in);
        int stringValues;

        System.out.println("Select the Task ID you want to delete");
        stringValues = values.nextInt();

        if(list.size()>stringValues && list.size()>0) {
            list.remove(stringValues);
            System.out.println("Task Deleted!!! ");
        }
        else{
            System.out.println("There is no task with specified ID");
        }

    }

    public static void createTask(List<ToDoCRD> list){
        boolean check = true;

        ToDoCRD task = new ToDoCRD();
        Scanner values = new Scanner(System.in);
        String stringValues;

        System.out.println("Name of the task");
        stringValues = values.nextLine();
        task.setName(stringValues);

        System.out.println("Description of the task");
        stringValues = values.nextLine();
        task.setDescription(stringValues);

        System.out.println("Finish date");
        stringValues = values.nextLine();
        task.setFinishDt(stringValues);

        while (check){
            System.out.println("Set Task priority from 1 to 5");
            stringValues = values.nextLine();

            if(Integer.parseInt(stringValues)>0 && Integer.parseInt(stringValues) <= task.getLIMIT()){
                task.setPriority(Integer.parseInt(stringValues));
                check = false;
            }
            else {
                System.out.println("Priority smaller than 1 or larger than 5");
            }
        }

        System.out.println("Set Task Category");
        stringValues = values.nextLine();
        task.setCategory(stringValues);

        System.out.println("Set Task Status");
        stringValues = values.nextLine();
        task.setStatus(stringValues);

        list.add(task);
        list.sort(Comparator.comparingInt(ToDoCRD::getPriority).reversed());

    }
}
