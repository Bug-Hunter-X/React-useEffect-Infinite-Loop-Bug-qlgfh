```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This is how to solve this issue
    let mounted = true;
    const interval = setInterval(() => {
      if(mounted){
        setCount(prevCount => prevCount + 1);
      }
    }, 1000);
    return () => {
      mounted = false;
      clearInterval(interval);
    }
  }, []);

  return <div>Count: {count}</div>;
}
```