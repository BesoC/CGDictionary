/**
 * Created by Beso on 1/6/2017.
 */

export class Test {
    public TestMethod(): string {
        return 'aaaaaa';
    }

    public static Create(): Test{
        return new Test();
    }
}