using System;

namespace prueba_codifico
{
    internal class Program
    {
        static void Main(string[] args)
        {
            bool continueApp;
            int numberFinal;
            do
            {   
                Console.WriteLine("Hola seguidamente se te solicitara que escribas un numero, \n" +
                     "con el cual se hara la sumatoria de" +
                     "todos los numeros naturales hasta ese punto");

                string numberConsole = Console.ReadLine();
                bool Isnumber = int.TryParse(numberConsole, out numberFinal);
                Program program = new Program();

                if ( !Isnumber )
                {
                    Console.WriteLine("Lo que escribiste no fue un numero");
                    continueApp = program.ContinueApp();
                }
                else
                {
                    int total = program.SumNumIndex(numberFinal);
                    Console.WriteLine($" El numero final es: { total }");
                    continueApp = program.ContinueApp();
                }        

            } while ( continueApp );

            
        }
        private int SumNumIndex( int index )
        {
            try
            {
                int sumTotal = 0;
                for ( int i = 1; i <= index; i++)
                {
                    sumTotal += i;
                }

                return sumTotal;
            }catch( Exception ex)
            {
                Console.WriteLine($"Hubo un error inexperado {ex}");
                return 0;
            }
        }

        private bool ContinueApp()
        {
            try
            {
                Console.WriteLine("si deseas seguir sumando numeros por favor introduce el 1 \n" +
                    "de lo contrario presione cualquier otra tecla");
                string numInto = Console.ReadLine();
                return ( numInto == "1" ) ? true : false;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"ocurrio un error inesperado ${ex}");
                return false;
            }
        }
    }
}
