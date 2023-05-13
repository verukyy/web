// Import the Swing, AWT and Desktop classes
import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;

// Define a class that extends JFrame
public class VerukyyLancher extends JFrame {

    // Define a constructor that sets up the window and its components
    public VerukyyLancher() {
        // Set the title of the window
        setTitle("Verukyy Lancher");

        // Set the background color of the window to black
        getContentPane().setBackground(Color.BLACK);

        // Set the size of the window to 400x300 pixels
        setSize(400, 300);

        // Disable the resizing function of the window
        setResizable(false);

        // Center the window on the screen
        setLocationRelativeTo(null);

        // Define a method to exit the program when the window is closed
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        // Get the user name from the system property
        String userName = System.getProperty("user.name");

        // Create a label with some text and a red foreground color
        JLabel label = new JLabel("Witaj " + userName + " w Verykyy Lancher");
        label.setForeground(Color.RED);
        label.setBackground(Color.BLACK);

        // Create three buttons with some text and different foreground colors
        JButton button1 = new JButton("Otwórz s-s.zip");
        button1.setForeground(Color.RED);
        button1.setBackground(Color.BLACK);

        JButton button2 = new JButton("Otwórz strone twórcy");
        button2.setForeground(Color.ORANGE);
        button2.setBackground(Color.BLACK);

        JButton button3 = new JButton("Wyjście z programu");
        button3.setForeground(Color.WHITE);
        button3.setBackground(Color.BLACK);

        // Define a method to open the website verukyy.online/s-s.zip when button 1 is clicked
        button1.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                openWebsite("http://verukyy.online/s-s.zip");
            }
        });

        // Define a method to open the website verukyy.online when button 2 is clicked
        button2.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                openWebsite("http://verukyy.online");
            }
        });

        // Define a method to quit the program when button 3 is clicked
        button3.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                System.exit(0);
            }
        });

        // Create an image icon with the image.png file
        ImageIcon image = new ImageIcon("image.png");

        // Create a label to display the image icon
        JLabel imageLabel = new JLabel(image);

        // Create a panel to hold the label and the buttons
        JPanel panel = new JPanel();

        // Add the label and the buttons to the panel
        panel.add(label);
        panel.add(button1);
        panel.add(button2);
        panel.add(button3);

        // Set the layout of the panel to vertical box layout
        panel.setLayout(new BoxLayout(panel, BoxLayout.Y_AXIS));

        // Add some spacing between the components of the panel
        panel.add(Box.createRigidArea(new Dimension(0, 10)));